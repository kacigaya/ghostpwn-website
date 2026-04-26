const features = [
  { k: "purpose", v: "offensive-security TUI agent for web pentesting" },
  { k: "providers", v: "openai · anthropic · google · github copilot" },
  { k: "tools", v: "readFile · grep · listDir · runCommand · fileInfo" },
  { k: "safety", v: "workspace boundary + .env / OS keychain secrets" },
  { k: "stream", v: "JSON-first agent loop · native streaming I/O" },
  { k: "stack", v: "rust 2024 · ratatui · crossterm" },
];

export function Description() {
  return (
    <section className="flex flex-col border border-[var(--border)] bg-black/60 px-4 py-3 overflow-hidden">
      <div className="flex items-baseline gap-2">
        <span className="text-[var(--accent)] text-xs">»</span>
        <h2 className="text-xs tracking-[0.25em] text-[var(--accent)] uppercase">
          ./about
        </h2>
        <span className="ml-auto text-[10px] text-[var(--muted)]">
          [README.md]
        </span>
      </div>
      <p className="mt-2 text-[11px] leading-snug text-[var(--fg)]/85 md:text-xs">
        a rust terminal assistant that streams responses from multiple LLMs and
        executes constrained local tools — keeping every command inside a hard
        workspace boundary.
      </p>
      <ul className="mt-3 grid grid-cols-1 gap-y-1 text-[10.5px] md:text-[11px]">
        {features.map((f) => (
          <li key={f.k} className="flex gap-2">
            <span className="text-[var(--accent)] shrink-0">▍</span>
            <span className="text-[var(--ghost)] uppercase tracking-wider w-[72px] shrink-0">
              {f.k}
            </span>
            <span className="text-[var(--fg)]/80 truncate">{f.v}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
