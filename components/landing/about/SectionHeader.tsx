export function SectionHeader({
  index,
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}
      >
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-cyan-300/80">
          {index}
        </span>
        <span className="h-px w-16 bg-gradient-to-r from-cyan-400/40 to-transparent" />
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-white/40">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] text-white text-balance leading-[1.02]">
        {title}
        {accent && (
          <>
            {" "}
            <span className="font-serif italic font-normal text-synapse">
              {accent}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg md:text-xl leading-relaxed text-white/55 text-balance ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
