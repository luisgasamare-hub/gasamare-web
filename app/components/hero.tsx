export default function Hero() {
  return (
    <section className="bg-[#f8f8fc] min-h-[85vh] flex flex-col items-center justify-center text-center px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3A1D6E] mb-6 leading-tight">
        Asesoría laboral, fiscal y contable<br />
        para empresas y autónomos
      </h1>

      <p className="text-gray-600 max-w-2xl mb-8 text-lg">
        En <span className="font-semibold text-[#3A1D6E]">GASAMARE</span> te ayudamos a
        gestionar tu negocio con tranquilidad, confianza y eficiencia.  
        Simplificamos tus gestiones para que tú te centres en hacer crecer tu empresa.
      </p>

      <a
        href="#contacto"
        className="bg-[#3A1D6E] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#532A9E] transition-all shadow-md"
      >
        Solicita una consulta gratuita
      </a>
    </section>
  );
}

