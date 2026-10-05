import { useEffect, useRef } from "react";

export function InteractiveGrid() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = sceneRef.current;
    if (!host) return;

    let disposed = false;
    let disposeScene = () => {};

    async function mountScene() {
      const THREE = await import("three");
      if (disposed || !host) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const styles = getComputedStyle(host);
      const lineColor = styles.getPropertyValue("--scene-line").trim();
      const glowColor = styles.getPropertyValue("--scene-glow").trim();
      const width = host.clientWidth;
      const height = host.clientHeight;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
      camera.position.set(0, 3.4, 9.5);
      camera.lookAt(0, -0.8, 0);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setSize(width, height);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      host.appendChild(renderer.domElement);

      const world = new THREE.Group();
      world.rotation.x = -0.12;
      scene.add(world);

      const columns = 34;
      const rows = 25;
      const spacing = 0.62;
      const positions: number[] = [];
      const baseHeights: number[] = [];

      function point(column: number, row: number) {
        const x = (column - columns / 2) * spacing;
        const z = (row - rows / 2) * spacing;
        const y = Math.sin(column * 0.5) * 0.12 + Math.cos(row * 0.38) * 0.16;
        return [x, y, z] as const;
      }

      for (let row = 0; row <= rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const start = point(column, row);
          const end = point(column + 1, row);
          positions.push(...start, ...end);
          baseHeights.push(start[1], end[1]);
        }
      }
      for (let column = 0; column <= columns; column += 1) {
        for (let row = 0; row < rows; row += 1) {
          const start = point(column, row);
          const end = point(column, row + 1);
          positions.push(...start, ...end);
          baseHeights.push(start[1], end[1]);
        }
      }

      const gridGeometry = new THREE.BufferGeometry();
      gridGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      const gridMaterial = new THREE.LineBasicMaterial({ color: lineColor, transparent: true, opacity: 0.28 });
      const grid = new THREE.LineSegments(gridGeometry, gridMaterial);
      grid.position.set(2.6, -3.2, -1.5);
      world.add(grid);

      const orbGeometry = new THREE.IcosahedronGeometry(1.6, 2);
      const orbMaterial = new THREE.MeshBasicMaterial({
        color: glowColor,
        wireframe: true,
        transparent: true,
        opacity: 0.24,
      });
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      orb.position.set(4.6, 0.45, -1.6);
      world.add(orb);

      const ringGeometry = new THREE.TorusKnotGeometry(1.05, 0.22, 120, 12, 2, 3);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: lineColor,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.set(5, 0.4, -1.7);
      world.add(ring);

      const particles = new Float32Array(270);
      for (let index = 0; index < particles.length; index += 3) {
        particles[index] = (Math.random() - 0.5) * 18;
        particles[index + 1] = (Math.random() - 0.35) * 8;
        particles[index + 2] = (Math.random() - 0.5) * 9;
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(particles, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: glowColor,
        size: 0.035,
        transparent: true,
        opacity: 0.52,
      });
      const particleField = new THREE.Points(particleGeometry, particleMaterial);
      world.add(particleField);

      const pointer = { x: 0, y: 0 };
      const target = { x: 0, y: 0 };
      const clock = new THREE.Clock();
      let frame = 0;

      function handlePointerMove(event: PointerEvent) {
        target.x = (event.clientX / window.innerWidth - 0.5) * 0.42;
        target.y = (event.clientY / window.innerHeight - 0.5) * 0.24;
      }

      function handleResize() {
        if (!host) return;
        const nextWidth = host.clientWidth;
        const nextHeight = host.clientHeight;
        camera.aspect = nextWidth / nextHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(nextWidth, nextHeight);
      }

      function render() {
        if (disposed) return;
        const elapsed = clock.getElapsedTime();
        pointer.x += (target.x - pointer.x) * 0.035;
        pointer.y += (target.y - pointer.y) * 0.035;
        world.rotation.y = pointer.x;
        world.rotation.x = -0.12 + pointer.y;

        if (!reduceMotion) {
          orb.rotation.x = elapsed * 0.11;
          orb.rotation.y = elapsed * 0.16;
          ring.rotation.x = -elapsed * 0.08;
          ring.rotation.z = elapsed * 0.1;
          particleField.rotation.y = elapsed * 0.012;

          const positionAttribute = gridGeometry.getAttribute("position");
          for (let index = 0; index < positionAttribute.count; index += 1) {
            const x = positionAttribute.getX(index);
            const z = positionAttribute.getZ(index);
            const wave = Math.sin(x * 0.62 + elapsed * 0.75) * 0.16 + Math.cos(z * 0.52 - elapsed * 0.55) * 0.12;
            positionAttribute.setY(index, (baseHeights[index] ?? 0) + wave);
          }
          positionAttribute.needsUpdate = true;
        }

        renderer.render(scene, camera);
        frame = requestAnimationFrame(render);
      }

      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("resize", handleResize);
      render();

      disposeScene = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("resize", handleResize);
        gridGeometry.dispose();
        gridMaterial.dispose();
        orbGeometry.dispose();
        orbMaterial.dispose();
        ringGeometry.dispose();
        ringMaterial.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }

    void mountScene();
    return () => {
      disposed = true;
      disposeScene();
    };
  }, []);

  return (
    <div className="hero-grid-scene" aria-hidden="true">
      <div ref={sceneRef} className="hero-grid-canvas" />
      <div className="hero-grid-fade" />
    </div>
  );
}