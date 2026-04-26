"use client";

import { useMemo } from "react";
import { useTypewriter, type TypewriterLine } from "@/hooks/useTypewriter";

export function Terminal() {
  const lines = useMemo<TypewriterLine[]>(
    () => [
      {
        prompt: "$ ",
        text: "git clone https://github.com/GhostPWN/ghostpwn.git",
        speed: 70,
      },
      {
        prompt: "$ ",
        text: "cd ghostpwn && cp .env.example .env",
        speed: 80,
        delay: 120,
      },
      { prompt: "$ ", text: "cargo run", speed: 90, delay: 150 },
      {
        text: "  Compiling ghostpwn v0.1.0",
        className: "text-[var(--muted)]",
        speed: 220,
        delay: 200,
      },
      {
        text: "  Finished `dev` profile [optimized] target(s)",
        className: "text-[var(--muted)]",
        speed: 240,
      },
      {
        text: "  Running `target/debug/ghostpwn`",
        className: "text-[var(--muted)]",
        speed: 240,
      },
      {
        text: "[ok] provider=anthropic model=claude-opus-4-7",
        className: "text-[var(--accent)]",
        speed: 200,
        delay: 120,
      },
      {
        text: "[ok] workspace=/srv/targets boundary=enforced",
        className: "text-[var(--accent)]",
        speed: 200,
      },
      {
        prompt: "› ",
        text: "/help     /model     /connect     /copilot",
        className: "text-[var(--ghost)]",
        speed: 110,
        delay: 150,
      },
      {
        prompt: "agent> ",
        text: "recon → enumerate → exploit → report",
        className: "text-[var(--fg)]",
        speed: 90,
        delay: 200,
      },
    ],
    [],
  );

  const { rendered, activeIndex, done } = useTypewriter(lines, 400);

  return (
    <section className="flex flex-col border border-[var(--border)] bg-black/80 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[var(--border)] bg-black px-3 py-1.5">
        <span className="h-2.5 w-2.5 bg-[var(--danger)] shadow-[0_0_6px_var(--danger)]" />
        <span className="h-2.5 w-2.5 bg-[#f5a623] shadow-[0_0_6px_#f5a623]" />
        <span className="h-2.5 w-2.5 bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]" />
        <span className="ml-3 text-[10px] tracking-[0.25em] text-[var(--muted)] uppercase">
          ~/ghostpwn — zsh — 120×30
        </span>
        <span className="ml-auto text-[10px] text-[var(--muted)]">
          tty/00
        </span>
      </div>
      <pre className="flex-1 overflow-hidden whitespace-pre-wrap break-words p-3 text-[11px] leading-[1.4] md:text-[12px]">
        {lines.map((line, i) => {
          const isActive = i === activeIndex && !done;
          const text = rendered[i] ?? "";
          const visible = i <= activeIndex || (i === activeIndex && done);
          if (!visible && text === "") return null;
          return (
            <div key={i} className={line.className ?? "text-[var(--fg)]"}>
              {line.prompt && (
                <span className="text-[var(--accent)]">{line.prompt}</span>
              )}
              <span>{text}</span>
              {isActive && <span className="cursor">&nbsp;</span>}
            </div>
          );
        })}
        {done && (
          <div className="text-[var(--fg)]">
            <span className="text-[var(--accent)]">agent&gt; </span>
            <span className="cursor">&nbsp;</span>
          </div>
        )}
      </pre>
    </section>
  );
}
