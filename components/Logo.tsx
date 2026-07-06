import Image from "next/image";

interface LogoProps {
  width?: number;
  className?: string;
}

// trinkit-logo.svg viewBox: 203.47 × 44.89 → ratio ≈ 4.532 : 1
export default function Logo({ width = 120, className = "" }: LogoProps) {
  const height = Math.round(width / 4.532);
  return (
    <Image
      src="/trinkit-logo.svg"
      alt="trinkit"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
