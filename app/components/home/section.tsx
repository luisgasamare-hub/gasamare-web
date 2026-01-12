export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`bg-white ${className}`}>
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}
