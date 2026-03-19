import { BriefcaseIcon, ScaleIcon, CalculatorIcon } from "@heroicons/react/24/outline";

export default function Servicios() {
  const servicios = [
    {
      icon: <BriefcaseIcon className="h-10 w-10 text-[#3A1D6E]" />,
      titulo: "Asesoría Laboral",
      texto:
        "Gestión de nóminas, contratos, altas y bajas en Seguridad Social. Nos ocupamos de todo para que tu empresa cumpla sin complicaciones.",
    },
    {
      icon: <ScaleIcon className="h-10 w-10 text-[#3A1D6E]" />,
      titulo: "Asesoría Fiscal",
      texto:
        "Declaraciones trimestrales y anuales, IVA, IRPF y planificación fiscal estratégica. Cumple con Hacienda con tranquilidad y sin errores.",
    },
    {
      icon: <CalculatorIcon className="h-10 w-10 text-[#3A1D6E]" />,
      titulo: "Asesoría Contable",
      texto:
        "Contabilidad clara, actualizada y útil para la toma de decisiones. Transformamos los números en información valiosa para tu negocio.",
    },
  ];

  return (
    <section id="servicios" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3A1D6E] mb-14">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="bg-[#f8f8fc] p-10 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-[#3A1D6E] mb-3">
                {s.titulo}
              </h3>
              <p className="text-gray-600 leading-relaxed">{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
