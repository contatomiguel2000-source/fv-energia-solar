function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-4 w-4 ${className}`} fill="none" aria-hidden="true">
      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Button({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: string;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="btn-overlay" />
      <span className="btn-content">
        <span className="btn-roll">
          <span>{children}</span>
          <span aria-hidden="true">{children}</span>
        </span>
        <span className="btn-roll">
          <span>
            <Arrow />
          </span>
          <span aria-hidden="true">
            <Arrow />
          </span>
        </span>
      </span>
    </a>
  );
}
