import { upcomingFixtureConfig } from "../lib/fixtureConfig";
import ParticleEffect from "../components/effects/ParticleEffect";
import { useMemo } from "react";

export default function Home() {
  const schedules = upcomingFixtureConfig?.schedules || [];
  const matchDay = schedules[0]?.day || "";

  const polygonPoints = useMemo(() => {
    const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
    const numeroDePoligonosCadaLado = 35;
    const etapaPorEtapa = 100 / numeroDePoligonosCadaLado;
    const alturaMaxima = 20;

    let str = "";
    for (let a = 0; a < 4; a++) {
      for (let b = 0; b < numeroDePoligonosCadaLado; b++) {
        const extensao = b * etapaPorEtapa;
        const altura = Math.round(getRandomArbitrary(0, alturaMaxima));
        if (a === 0) {
          str += `${extensao}% ${altura}%, `;
        } else if (a === 1) {
          str += `${100 - altura}% ${extensao}%, `;
        } else if (a === 2) {
          str += `${100 - extensao}% ${100 - altura}%, `;
        } else if (a === 3) {
          str += `${altura}% ${100 - extensao}%, `;
        }
      }
    }
    return str.slice(0, -2);
  }, []);

  return (
    <div className="relative flex flex-col h-full overflow-hidden atmospheric-split">
      <div
        className="w-[200vh] h-6 z-20 border-2 border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-46 animate-fade-in"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div className="absolute inset-0 z-0">
        {/* TOP (oscuro) */}

        {/* BOTTOM (color rosa) */}
        {/* <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #fe97b515 0%, #fe97b508 100%)",
            clipPath: "polygon(20% 100%, 100% -40%, 100% 100%, 0 100%)",
          }}
        /> */}
      </div>
      {/* TEXTURAS */}

      <div
        className="absolute inset-0 z-10 pointer-events-none animate-fade-in"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/stardust.png')",
          opacity: 0.3,
        }}
      />

      {/* PARTICLE EFFECT */}

      {/* FADE INFERIOR */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent animate-fade-in" />
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-40 animate-fade-in"
        style={{
          background:
            "radial-gradient(circle at center, transparent, rgba(0,0,0,0.4))",
          mixBlendMode: "overlay",
        }}
      />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-30 flex flex-col items-center justify-center flex-1 px-4 md:px-12 pb-4">
        {/* BADGE */}
        <div className="mb-4 md:mb-6 animate-fade-in-up animate-delay-100">
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
            flex-row
            items-center
            justify-center
            gap-1
            sm:gap-4
            lg:gap-8
          "
        >
          {/* FLORIDA */}
          <div className="flex flex-col items-center justify-center text-center w-5/12 lg:w-5/12 animate-fade-in-up animate-delay-200">
            <img
              src="/images/florida.svg"
              alt="Florida"
              className="
    w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56
    object-contain
    drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]
  "
            />

            <h2 className="text-sm sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white uppercase italic mt-1 sm:mt-2">
              FLORIDA
            </h2>
          </div>

          {/* VS */}
          <div className="flex items-center justify-center w-2/12 lg:w-2/12 shrink-0 relative animate-fade-in-up animate-delay-300">
            {/* Golden glow backdrop */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                filter: "blur(40px)",
                opacity: 0.6,
              }}
            >
              <div
                className="w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, #c7a86b 0%, transparent 70%)",
                }}
              />
            </div>
            <h1
              className="
                font-anybody
                text-[28px]
                sm:text-[50px]
                md:text-[70px]
                lg:text-[100px]
                xl:text-[140px]
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
          <div className="flex flex-col items-center justify-center text-center w-5/12 lg:w-5/12 animate-fade-in-up animate-delay-400">
            <img
              src="/images/chw.png"
              alt="Chile Wanderers"
              className="
    w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56
    object-contain
    drop-shadow-[0_0_18px_#fe97b5]
  "
            />

            <h2 className="text-sm sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-black uppercase italic mt-1 sm:mt-2">
              C.WANDERERS
            </h2>
          </div>
        </div>
        <div className="relative z-30 w-full flex flex-col items-center px-8 pt-4 animate-fade-in-up animate-delay-500">
          {matchDay && (
            <div className="mb-2 flex flex-col text-white font-mono text-[10px] gap-1 uppercase tracking-widest">
              <span className="text-center font-bold">{matchDay}</span>
              <span className="text-center text-[8px]">
                Osman Perez Freire, Valparaíso
              </span>
            </div>
          )}

          <div className="w-full max-w-xl bg-black/30 backdrop-blur-md py-2 px-4 rounded-lg border-1 border-[#c7a86b]/20">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
              {schedules.map((sch, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="font-mono text-[7px] sm:text-[8px] uppercase text-white/60 text-center">
                    {sch.division}
                  </span>

                  <span className="font-anybody text-xs sm:text-sm md:text-lg italic font-black text-white">
                    {sch.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
