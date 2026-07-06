interface LogoProps {
  width?: number;
  className?: string;
}

export default function Logo({ width = 120, className = "" }: LogoProps) {
  // trinkit-logo.svg viewBox: 203.47 × 44.89 → ratio ≈ 4.532 : 1
  const height = Math.round(width / 4.532);
  return (
    <img
      src="/trinkit-logo.svg"
      alt="trinkit"
      width={width}
      height={height}
      className={className}
    />
  );
}
