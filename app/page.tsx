import { Header } from "@/components/Header";
import { Description } from "@/components/Description";
import { Terminal } from "@/components/Terminal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="scanlines relative h-screen w-screen overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between border-b border-[var(--border)] bg-black/80 px-3 py-1 text-[10px] tracking-[0.25em] text-[var(--muted)] uppercase">
        <span>ghostpwn // v0.1.0</span>
        <span className="hidden md:inline">
          rust 2024 · ratatui · crossterm
        </span>
        <span>
          uplink: <span className="text-[var(--accent)]">secure</span>
        </span>
      </div>

      <main className="grid h-full w-full grid-cols-1 grid-rows-[auto_minmax(0,auto)_minmax(0,1fr)_auto] gap-3 p-3 pt-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:grid-rows-[auto_minmax(0,1fr)_auto]">
        <div className="md:col-span-2">
          <Header />
        </div>

        <div className="flex min-h-0 flex-col">
          <Description />
        </div>

        <div className="flex min-h-0 flex-col">
          <Terminal />
        </div>

        <div className="md:col-span-2">
          <Footer />
        </div>
      </main>
    </div>
  );
}
