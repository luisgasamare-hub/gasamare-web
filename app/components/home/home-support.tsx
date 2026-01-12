"use client";

import Image from "next/image";
import { CalendarDays, Clock, FolderKanban } from "lucide-react";
import React, { useMemo, useState } from "react";

const PRIMARY = "#1B123A";
const DUE_COLOR = "#D6A100";
const HOLIDAY_COLOR = "#EF4444";

type DayKind = "due" | "holiday";

type DayItem = {
  kind: DayKind;
  title: string;
  subtitle?: string;
};

type MonthData = {
  year: number;
  monthIndex: number;
  monthLabel: string;
  daysInMonth: number;
  itemsByDay: Record<number, DayItem[]>;
};

function cn(...s: Array<string | false | undefined | null>) {
  return s.filter(Boolean).join(" ");
}

export function HomeSupport() {
  const month: MonthData = useMemo(
    () => ({
      year: 2026,
      monthIndex: 0,
      monthLabel: "Enero",
      daysInMonth: 31,
      itemsByDay: {
        1: [{ kind: "holiday", title: "Año Nuevo" }],
        6: [{ kind: "holiday", title: "Día de Reyes" }],
        30: [
          { kind: "due", title: "IVA / IRPF", subtitle: "Agencia Tributaria" },
          { kind: "due", title: "Cierre interno", subtitle: "Cierre contable" },
        ],
        31: [{ kind: "due", title: "Seguros sociales", subtitle: "Ingreso de cuotas" }],
      },
    }),
    []
  );

  const weekLabels = ["LU", "MA", "MI", "JU", "VI", "SÁ", "DO"];

  const firstDayIndex = useMemo(() => {
    const jsDay = new Date(month.year, month.monthIndex, 1).getDay();
    return (jsDay + 6) % 7;
  }, [month.monthIndex, month.year]);

  const cells = useMemo(() => {
    const total = firstDayIndex + month.daysInMonth;
    const rows = Math.ceil(total / 7);
    const out: Array<{ day?: number }> = [];

    for (let i = 0; i < rows * 7; i++) {
      const d = i - firstDayIndex + 1;
      out.push(d >= 1 && d <= month.daysInMonth ? { day: d } : {});
    }

    return out;
  }, [firstDayIndex, month.daysInMonth]);

  const [hoverDay, setHoverDay] = useState<number | null>(null);

  return (
    <section className="bg-black/[0.02]">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-start">
          <div>
            <p
              className="text-xs tracking-[0.28em] uppercase mb-4"
              style={{ color: PRIMARY, opacity: 0.55 }}
            >
              TRANQUILIDAD Y CONTROL
            </p>

            <h2
              className="font-sans font-semibold leading-[1.08] text-3xl sm:text-4xl lg:text-5xl"
              style={{ color: PRIMARY }}
            >
              Plazos claros. Gestión al día.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-black/70 max-w-2xl">
              Planificamos vencimientos y documentación con antelación para que todo llegue preparado
              cuando toca.
            </p>

            <div className="mt-9 space-y-6">
              <SupportPoint
                icon={<CalendarDays className="h-5 w-5" />}
                title="Fechas visibles"
                text="Vencimientos y festivos marcados directamente en el mes."
              />
              <SupportPoint
                icon={<FolderKanban className="h-5 w-5" />}
                title="Orden y revisión"
                text="Documentación lista antes de los plazos."
              />
              <SupportPoint
                icon={<Clock className="h-5 w-5" />}
                title="Anticipación"
                text="Nos adelantamos a los plazos para evitar imprevistos."
              />
            </div>
          </div>

          <div className="relative border border-black/10 bg-white overflow-visible">
            <div className="pointer-events-none absolute right-6 top-6 opacity-[0.06]">
              <Image src="/images/logo-icon.svg" alt="" width={48} height={48} priority={false} />
            </div>

            <div className="px-10 pt-9 pb-7 text-center">
              <div className="text-xs uppercase tracking-[0.22em] text-black/35">{month.year}</div>
              <div className="mt-2 text-2xl font-semibold" style={{ color: PRIMARY }}>
                {month.monthLabel}
              </div>
            </div>

            <div className="px-10 pb-9">
              <div className="grid grid-cols-7 gap-2">
                {weekLabels.map((w) => (
                  <div
                    key={w}
                    className="text-[11px] tracking-[0.18em] text-center font-semibold text-black/45"
                  >
                    {w}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-7 gap-y-3 gap-x-2">
                {cells.map((c, i) => {
                  const day = c.day;
                  if (!day) return <div key={i} className="h-7" />;

                  const col = i % 7;
                  const weekend = col >= 5;

                  const items = month.itemsByDay[day] || [];
                  const hasHoliday = items.some((x) => x.kind === "holiday");
                  const hasDue = items.some((x) => x.kind === "due");

                  const numberColor = hasHoliday
                    ? HOLIDAY_COLOR
                    : hasDue
                      ? DUE_COLOR
                      : weekend
                        ? "rgba(0,0,0,0.45)"
                        : PRIMARY;

                  return (
                    <div
                      key={i}
                      className="relative h-7 flex items-center justify-center"
                      onMouseEnter={() => setHoverDay(day)}
                      onMouseLeave={() => setHoverDay((v) => (v === day ? null : v))}
                    >
                      <span
                        className={cn("text-sm font-semibold", items.length > 0 && "cursor-default")}
                        style={{ color: numberColor }}
                      >
                        {day}
                      </span>

                      {hoverDay === day && items.length > 0 && (
                        <div className="absolute z-30 left-1/2 -translate-x-1/2 top-9 w-[280px] border border-black/10 bg-white shadow-lg px-4 py-3">
                          <div className="text-xs font-semibold" style={{ color: PRIMARY }}>
                            {day} de {month.monthLabel}
                          </div>

                          <div className="mt-2 space-y-2">
                            {items.map((it, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span
                                  className="mt-[6px] h-[6px] w-[6px] rounded-full"
                                  style={{
                                    backgroundColor: it.kind === "holiday" ? HOLIDAY_COLOR : DUE_COLOR,
                                  }}
                                />
                                <div className="text-sm text-black/80 leading-snug">
                                  <div className="font-semibold">{it.title}</div>
                                  {it.subtitle ? (
                                    <div className="text-xs text-black/55 mt-0.5">{it.subtitle}</div>
                                  ) : null}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 flex items-center justify-end gap-5 text-xs text-black/60">
                <span className="inline-flex items-center gap-2">
                  <span
                    className="h-[7px] w-[7px] rounded-full"
                    style={{ backgroundColor: DUE_COLOR }}
                  />
                  Vencimiento
                </span>
                <span className="inline-flex items-center gap-2">
                  <span
                    className="h-[7px] w-[7px] rounded-full"
                    style={{ backgroundColor: HOLIDAY_COLOR }}
                  />
                  Festivo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportPoint({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 border border-black/10 bg-white flex items-center justify-center text-[#1B123A]">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-[#1B123A]">{title}</div>
        <div className="mt-1 text-sm text-black/60">{text}</div>
      </div>
    </div>
  );
}
