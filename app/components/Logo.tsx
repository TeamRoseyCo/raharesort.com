import Image from "next/image";

export default function Logo({
  size = 44,
  variant = "auto",
  wordmark = true,
  className = "",
}: {
  size?: number;
  variant?: "auto" | "dark" | "light";
  wordmark?: boolean;
  className?: string;
}) {
  // variant="light" renders the logo as near-white (for dark section navs)
  // variant="dark" keeps the original brown
  // variant="auto" inherits current color via CSS filter trick
  const filter =
    variant === "light"
      ? "brightness(0) invert(1)"
      : variant === "dark"
      ? "none"
      : undefined;

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/raha-logo.png"
        alt="Raha Resort"
        width={size}
        height={size}
        priority
        style={{
          width: size,
          height: "auto",
          filter,
          objectFit: "contain",
        }}
      />
      {wordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="font-[family-name:var(--font-heading)] font-normal"
            style={{
              fontSize: size * 0.48,
              letterSpacing: "0.22em",
              color: "currentColor",
            }}
          >
            Raha Resort
          </span>
        </span>
      )}
    </span>
  );
}
