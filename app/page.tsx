import Image from "next/image";
import Dither from "@/components/Dither";

const REPO = "https://github.com/GhostPWN/ghostpwn";

const FEATURES = [
  "ratatui + crossterm TUI",
  "JSON-first agent loop with tool-calling",
  "Native streaming across provider adapters",
  "In-session provider / model switching",
  "Workspace boundary enforcement",
  "Persistent secrets via .env + OS keychain",
];

const TOOLS = [
  "readFile",
  "listDirectory",
  "searchFiles",
  "grep",
  "runCommand",
  "fileInfo",
];

const PROVIDERS = ["OpenAI", "Anthropic", "Google", "GitHub Copilot"];

const STACK = [
  { label: "Runtime", value: "Rust" },
  { label: "Edition", value: "2024" },
  { label: "UI", value: "ratatui · crossterm" },
  { label: "Auth", value: "OS keychain · .env" },
  { label: "License", value: "MIT" },
  { label: "Version", value: "v0.1.0" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <Dither
          waveColor={[0.24, 0.11, 0.46]}
          waveSpeed={0.04}
          waveFrequency={3}
          waveAmplitude={0.35}
          colorNum={4}
          pixelSize={2}
          enableMouseInteraction={false}
          mouseRadius={0.6}
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 text-[11px] tracking-[0.4em] uppercase text-white/70 mix-blend-difference">
        <span>ghostpwn</span>
        <span className="hidden sm:inline">v0.1.0</span>
        <span>MIT</span>
      </header>

      <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 py-24">
        <div className="relative flex h-[44vh] min-h-[280px] w-full max-w-md items-center justify-center sm:max-w-lg">
          <Image
            src="/ghostpwn-logo.svg"
            alt="GhostPWN"
            width={400}
            height={400}
            priority
            className="h-full w-auto drop-shadow-[0_0_40px_rgba(168,85,247,0.55)]"
          />
        </div>

        <p className="pointer-events-none mt-6 text-center text-xs tracking-[0.55em] uppercase text-white/85 mix-blend-difference sm:text-sm">
          autonomous · web · pentesting · agent
        </p>

        <p className="pointer-events-none mt-3 max-w-xl text-center text-[11px] leading-relaxed tracking-[0.15em] uppercase text-white/55 mix-blend-difference">
          rust terminal assistant for offensive security research · multi-provider LLM · human-in-the-loop · lightweight
        </p>

        <div className="pointer-events-none mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase">
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto border border-white/70 bg-black/30 px-4 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
          >
            github →
          </a>
          <a
            href={`${REPO}#readme`}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto border border-white/30 bg-black/20 px-4 py-2 text-white/85 backdrop-blur-sm transition-colors hover:border-white hover:text-white"
          >
            readme
          </a>
          <a
            href={`${REPO}.git`}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto border border-white/30 bg-black/20 px-4 py-2 text-white/85 backdrop-blur-sm transition-colors hover:border-white hover:text-white"
          >
            clone
          </a>
        </div>

        <div className="mt-14 animate-pulse text-[10px] tracking-[0.5em] uppercase text-white/50">
          ↓ scroll
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-32">
        <div className="grid gap-px border border-white/15 bg-white/10 sm:grid-cols-3">
          {STACK.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-2 bg-black/70 p-6 backdrop-blur-md"
            >
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/45">
                {item.label}
              </span>
              <span className="text-sm tracking-[0.2em] uppercase text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="border border-white/15 bg-black/70 p-8 backdrop-blur-md">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xs tracking-[0.5em] uppercase text-white">
                features
              </h2>
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                /core
              </span>
            </div>
            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 text-sm text-white/80 before:mt-[7px] before:block before:h-1.5 before:w-1.5 before:shrink-0 before:bg-[#7c3aed]"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/15 bg-black/70 p-8 backdrop-blur-md">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xs tracking-[0.5em] uppercase text-white">
                providers
              </h2>
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                /llm
              </span>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {PROVIDERS.map((p) => (
                <li
                  key={p}
                  className="border border-white/20 px-4 py-3 text-xs tracking-[0.2em] uppercase text-white/85"
                >
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 mb-6 flex items-center justify-between">
              <h2 className="text-xs tracking-[0.5em] uppercase text-white">
                local tools
              </h2>
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                /sandbox
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <li
                  key={t}
                  className="border border-white/20 bg-black/40 px-3 py-1.5 font-mono text-[11px] text-white/85"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border border-white/15 bg-black/70 p-8 backdrop-blur-md">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xs tracking-[0.5em] uppercase text-white">
              quickstart
            </h2>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
              /shell
            </span>
          </div>
          <pre className="overflow-x-auto border border-white/10 bg-black/80 p-5 font-mono text-xs leading-relaxed text-white/85">
            <code>
              <span className="text-white/40"># clone repo</span>
              {"\n"}
              git clone {REPO}.git{"\n"}
              cd ghostpwn{"\n"}
              {"\n"}
              <span className="text-white/40"># configure secrets</span>
              {"\n"}
              cp .env.example .env{"\n"}
              {"\n"}
              <span className="text-white/40"># run TUI</span>
              {"\n"}
              cargo run
            </code>
          </pre>
        </div>
      </section>

      <footer className="pointer-events-none relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-black/80 px-6 py-5 text-[10px] tracking-[0.4em] uppercase text-white/55 backdrop-blur-md">
        <span>rust · ratatui · crossterm</span>
        <span className="hidden sm:inline">offensive security research</span>
        <span>built / for / hackers</span>
      </footer>
    </main>
  );
}
