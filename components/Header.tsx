import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center gap-4 border border-[var(--border)] bg-black/60 px-4 py-3">
      <Image
        src="/ghostpwn-logo.svg"
        alt="GhostPWN logo"
        width={56}
        height={56}
        priority
        className="ghost-glow shrink-0"
      />
      <div className="min-w-0">
        <h1
          className="glitch flicker text-2xl font-bold tracking-[0.2em] text-[var(--accent)] uppercase leading-none md:text-3xl"
          data-text="ghostpwn"
        >
          ghostpwn
        </h1>
        <p className="mt-1 text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase md:text-xs">
          autonomous_web_pentesting_agent
        </p>
        <p className="mt-1 text-[10px] text-[var(--ghost)]/80 md:text-xs">
          multi-provider LLM · human-in-the-loop · rust + ratatui
        </p>
      </div>
      <div className="ml-auto hidden items-center gap-2 self-start text-[10px] tracking-widest text-[var(--muted)] uppercase md:flex">
        <span className="inline-block h-2 w-2 bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
        <span>session_active</span>
      </div>
    </header>
  );
}
