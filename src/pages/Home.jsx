import { upcomingFixtureConfig } from "../lib/fixtureConfig";
import ParticleEffect from "../components/effects/ParticleEffect";

export default function Home() {
  const schedules = upcomingFixtureConfig?.schedules || [];
  const matchDay = schedules[0]?.day || "";

  return (
    <div className="relative flex flex-col min-h-[100svh] overflow-hidden atmospheric-split">
      {/* TEXTURAS */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/stardust.png')",
          opacity: 0.3,
        }}
      />

      {/* PARTICLE EFFECT */}
      <ParticleEffect />

      {/* FADE INFERIOR */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, transparent, rgba(0,0,0,0.4))",
          mixBlendMode: "overlay",
        }}
      />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-30 flex flex-col items-center justify-center flex-1 px-4 md:px-12 pt-14 sm:pt-16 md:pt-[4.5rem] pb-4">
        {/* BADGE */}
        <div className="mb-6 md:mb-10">
          <span className="font-mono text-[9px] md:text-xs text-[#c7a86b] uppercase tracking-[0.4em] px-3 py-1 md:px-6 md:py-2 rounded-full bg-black/80 border-1 border-[#c7a86b]/20 backdrop-blur-sm">
            Fecha 12
          </span>
        </div>

        {/* TEAMS */}
        <div
          className="
            w-full
            max-w-7xl
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
            gap-4
            lg:gap-8
          "
        >
          {/* FLORIDA */}
          <div className="flex flex-col items-center text-center lg:w-5/12">
            <img
              src="/images/florida.svg"
              alt="Florida"
              className="
    w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80
    object-contain
    drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]
  "
            />

            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl text-white uppercase italic">
              FLORIDA
            </h2>
          </div>

          {/* VS */}
          <div className="flex items-center justify-center lg:w-2/12 shrink-0 relative">
            {/* Golden glow backdrop */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                filter: 'blur(60px)',
                opacity: 0.6,
              }}
            >
              <div
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #c7a86b 0%, transparent 70%)',
                }}
              />
            </div>
            <h1
              className="
                font-anybody
                text-[60px]
                sm:text-[90px]
                lg:text-[120px]
                xl:text-[160px]
                text-white
                italic
                vs-glow
                select-none
                relative z-10
              "
            >
              VS
            </h1>
          </div>

          {/* CHW */}
          <div className="flex flex-col items-center text-center lg:w-5/12">
            <img
              src="/images/chw.png"
              alt="Chile Wanderers"
              className="
    w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80
    object-contain
    drop-shadow-[0_0_18px_#fe97b5]
  "
            />

            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl text-black uppercase italic">
              C.WANDERERS
            </h2>
          </div>

        </div>
        <div className="relative z-30 w-full flex flex-col items-center px-12 pt-6">
          {matchDay && (
            <div className="mb-2 flex flex-col text-white font-mono text-[12px] gap-2 uppercase tracking-widest ">
              <span className="text-center font-bold">{matchDay}</span>
              <span className="text-center text-[9px]">
                Osman Perez Freire, Valparaíso
              </span>
            </div>
          )}

          <div className="w-full max-w-2xl bg-black/30 backdrop-blur-md py-2 rounded-lg border-1 border-[#c7a86b]/20">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
              {schedules.map((sch, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="font-mono text-[8px] sm:text-[10px] uppercase text-white/60 text-center">
                    {sch.division}
                  </span>

                  <span className="font-anybody text-xs sm:text-lg md:text-2xl italic font-black text-white">
                    {sch.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HORARIOS */}

    </div>
  );
}