import Dither from "@/components/Dither";
import ASCIIText from "@/components/ASCIIText";

const REPO = "https://github.com/GhostPWN/ghostpwn";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Dither
          waveColor={[
            0.48627450980392156, 0.22745098039215686, 0.9294117647058824,
          ]}
          waveSpeed={0.04}
          waveFrequency={3}
          waveAmplitude={0.35}
          colorNum={4}
          pixelSize={2}
          enableMouseInteraction
          mouseRadius={0.6}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 text-[11px] tracking-[0.4em] uppercase text-white/70 mix-blend-difference">
        <span>ghostpwn</span>
        <span className="hidden sm:inline">v0.1.0</span>
        <span>MIT</span>
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6">
        <div className="relative h-[42vh] w-full max-w-5xl">
          <ASCIIText
            text="GHOSTPWN"
            asciiFontSize={6}
            textFontSize={220}
            planeBaseHeight={9}
            enableWaves
          />
        </div>

        <p className="pointer-events-none mt-2 text-center text-xs tracking-[0.55em] uppercase text-white/85 mix-blend-difference sm:text-sm">
          autonomous · web · pentesting · agent
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
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 py-5 text-[10px] tracking-[0.4em] uppercase text-white/60 mix-blend-difference">
        <span>rust · ratatui</span>
        <span className="hidden sm:inline">offensive security research</span>
        <span>built / for / hackers</span>
      </div>
    </main>
  );
}
