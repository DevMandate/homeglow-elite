interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, center = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[#00B67A] mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl ${light ? "text-white" : "text-[#0B2545]"}`}
        style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
