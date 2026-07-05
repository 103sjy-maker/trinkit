import Image from "next/image";

interface LogoProps {
  width?: number;
  className?: string;
}

// New logo viewBox: 2143.11 x 429.31 → ratio ≈ 4.992 : 1
export default function Logo({ width = 120, className = "" }: LogoProps) {
  const height = Math.round(width / 4.992);
  return (
    <Image
      src="/logo.svg"
      alt="trinkit"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
