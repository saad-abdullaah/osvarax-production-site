import lightAsset from "@/assets/osvarax-logo-light.png";
import darkAsset from "@/assets/osvarax-logo-dark.png";

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <span className={`inline-flex ${className}`}>
      <img
        src={lightAsset}
        alt="OsvaraX logo"
        width={1110}
        height={205}
        loading="eager"
        decoding="async"
        className="h-full w-auto object-contain dark:hidden"
      />
      <img
        src={darkAsset}
        alt="OsvaraX logo"
        width={1110}
        height={205}
        loading="eager"
        decoding="async"
        aria-hidden="true"
        className="hidden h-full w-auto object-contain dark:block"
      />
    </span>
  );
}
