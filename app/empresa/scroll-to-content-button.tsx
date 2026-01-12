"use client";

type Props = {
  primary: string;
  accent: string;
};

export function ScrollToEmpresaContentButton({ primary, accent }: Props) {
  const scrollToContent = () => {
    const el = document.getElementById("empresa-content");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      onClick={scrollToContent}
      className="inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold border border-black/15 bg-white hover:bg-black/[0.03]"
      style={{ color: primary }}
    >
      Conoce la empresa
      <span className="inline-block h-[2px] w-8" style={{ backgroundColor: accent }} />
    </button>
  );
}
