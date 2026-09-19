export function SectionHeading({
  title,
  body,
  className = "",
}: {
  title: string[];
  body: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[40px]">
        {title.map((line) => (
          <span key={line} className="sm:block">
            {line}{" "}
          </span>
        ))}
      </h2>
      <p className="mt-4 max-w-[430px] text-[14px] leading-relaxed text-muted">
        {body}
      </p>
    </div>
  );
}
