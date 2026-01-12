"use client";

import React, { useEffect, useRef, useState } from "react";
import { CalendarDays, ClipboardList, ShieldCheck } from "lucide-react";

const PRIMARY = "#1B123A";

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

function AnimatedElement({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const transform =
    isVisible
      ? "translate(0)"
      : direction === "up"
        ? "translateY(24px)"
        : direction === "down"
          ? "translateY(-24px)"
          : direction === "left"
            ? "translateX(24px)"
            : direction === "right"
              ? "translateX(-24px)"
              : "none";

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out will-change-transform`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

type CardItem = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

const cards: CardItem[] = [
  {
    icon: ClipboardList,
    title: "Analizamos tu situación",
    desc: "Revisamos tu actividad, tu estructura y tus obligaciones para entender tu situación y detectar qué necesitas.",
  },
  {
    icon: CalendarDays,
    title: "Planificamos y preparamos",
    desc: "Organizamos plazos y documentación con margen para que todo llegue listo a tiempo.",
  },
  {
    icon: ShieldCheck,
    title: "Seguimiento y avisos",
    desc: "Control continuo y comunicación directa para resolver rápido y evitar bloqueos.",
  },
];

export function HomeHowWeWork() {
  return (
    <section className="bg-white">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement direction="up">
            <p
              className="text-xs tracking-[0.28em] uppercase mb-4"
              style={{ color: PRIMARY, opacity: 0.55 }}
            >
              CÓMO TRABAJAMOS
            </p>

            <h2
              className="font-sans font-semibold leading-[1.08] text-3xl sm:text-4xl lg:text-5xl"
              style={{ color: PRIMARY }}
            >
              Un método simple, sin sorpresas.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-black/70">
              Transparencia desde el primer día: qué toca, cuándo toca y cómo lo dejamos preparado.
            </p>
          </AnimatedElement>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((c, idx) => {
            const Icon = c.icon;

            return (
              <AnimatedElement key={c.title} direction="up" delay={idx * 120}>
                <div className="group relative h-full border border-black/10 bg-black/[0.02] p-8 lg:p-10 transition-colors duration-500 hover:bg-[#1B123A]">
                  <div className="pointer-events-none absolute top-6 right-6 opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]">
                    <Icon className="h-24 w-24 text-black group-hover:text-white" />
                  </div>

                  <div className="relative z-10">
                    <div className="h-12 w-12 border border-black/10 bg-white flex items-center justify-center mb-7 transition-colors duration-500 group-hover:bg-white/10 group-hover:border-white/20">
                      <Icon
                        className="h-6 w-6 transition-colors duration-500"
                        style={{ color: PRIMARY }}
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-[#1B123A] transition-colors duration-500 group-hover:text-white">
                      {c.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-black/65 transition-colors duration-500 group-hover:text-white/75">
                      {c.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-white transition-all duration-700 ease-in-out group-hover:w-full" />
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}
