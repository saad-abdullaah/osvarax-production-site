import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

type TiltProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  depth?: "subtle" | "raised";
};

const spring = { stiffness: 180, damping: 22, mass: 0.7 };

export function Tilt({
  children,
  className = "",
  intensity = 5,
  depth = "subtle",
}: TiltProps) {
  const reduceMotion = useReducedMotion();
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, spring);
  const rotateY = useSpring(rotateYValue, spring);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    rotateXValue.set(vertical * intensity * -2);
    rotateYValue.set(horizontal * intensity * 2);
  }

  function reset() {
    rotateXValue.set(0);
    rotateYValue.set(0);
  }

  return (
    <motion.div
      className={`tilt-shell ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      {...(reduceMotion ? {} : { whileHover: { y: -4 } })}
      transition={{ duration: 0.2 }}
    >
      <div className={depth === "raised" ? "tilt-depth-raised h-full" : "tilt-depth h-full"}>
        {children}
      </div>
    </motion.div>
  );
}