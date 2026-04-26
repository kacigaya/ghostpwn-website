import { CopyButton } from "@/components/CopyButton";

const REPO = "https://github.com/GhostPWN/ghostpwn";
const CLONE = "git clone https://github.com/GhostPWN/ghostpwn.git";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center gap-2 border border-[var(--border)] bg-black/60 px-3 py-2">
      <a
        href={REPO}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[var(--accent)] bg-black px-3 py-1.5 text-[10.5px] tracking-[0.2em] text-[var(--accent)] uppercase transition-colors hover:bg-[var(--accent)] hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
      >
        ▶ github
      </a>
      <a
        href={`${REPO}#readme`}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[var(--border)] bg-black px-3 py-1.5 text-[10.5px] tracking-[0.2em] text-[var(--fg)] uppercase transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
      >
        view source
      </a>
      <div className="flex items-center gap-2 border border-[var(--border)] bg-black px-2 py-1">
        <span className="text-[var(--muted)] text-[10px]">$</span>
        <code className="text-[10.5px] text-[var(--fg)]">{CLONE}</code>
        <CopyButton value={CLONE} label="clone" />
      </div>
      <span className="ml-auto hidden items-center gap-3 text-[10px] tracking-[0.2em] text-[var(--muted)] uppercase sm:flex">
        <span>license · MIT</span>
        <span className="text-[var(--accent)]">●</span>
        <span>built_for_research</span>
      </span>
    </footer>
  );
}
