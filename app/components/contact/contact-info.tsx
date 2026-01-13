import { Clock, Mail, MapPin, Phone } from "lucide-react";

const PRIMARY = "#1B123A";
const WHATSAPP = "#25D366";

export function ContactInfo() {
  const phone1 = { value: "+34 614 859 357", href: "tel:+34614859357" };
  const phone2 = { value: "+34 671 047 381", href: "tel:+34671047381" };
  const email = "luis.gasamare@gmail.com";
  const location = "Madrid, España";

  return (
    <aside className="bg-white pb-24 lg:pb-0">
      <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1B123A]">
        Datos de Contacto
      </h2>

      <p className="mt-3 text-base text-black/60 max-w-xl">
        Nuestro equipo está disponible para responder a tus consultas y programar una primera reunión
        sin compromiso.
      </p>

      <div className="mt-10 space-y-8">
        <InfoItem
          icon={<Mail className="w-6 h-6" />}
          title="Email"
          content={
            <a
              href={`mailto:${email}`}
              className="text-base text-black/60 hover:underline underline-offset-4 break-all"
            >
              {email}
            </a>
          }
        />

        <InfoItem
          icon={<Phone className="w-6 h-6" />}
          title="Teléfono"
          content={
            <div className="text-base text-black/60 flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <a href={phone1.href} className="hover:underline underline-offset-4">
                {phone1.value}
              </a>

              <span className="hidden sm:inline text-black/40">|</span>

              <a href={phone2.href} className="hover:underline underline-offset-4">
                {phone2.value}
              </a>
            </div>
          }
        />

        <InfoItem
          icon={<MapPin className="w-6 h-6" />}
          title="Ubicación"
          content={<p className="text-base text-black/60">{location}</p>}
        />
      </div>

      <div className="mt-12 border border-black/10 p-8 bg-black/[0.02]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-black/10 bg-white flex items-center justify-center">
            <Clock className="w-5 h-5" style={{ color: PRIMARY }} />
          </div>
          <h3 className="text-2xl font-semibold text-[#1B123A]">Horario de Atención</h3>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between gap-6">
            <span className="text-sm text-black/60">Lunes - Viernes</span>
            <span className="text-sm font-semibold text-[#1B123A]">09:00 - 18:00</span>
          </div>

          <div className="flex justify-between gap-6">
            <span className="text-sm text-black/60">Sábado - Domingo</span>
            <span className="text-sm font-semibold text-[#1B123A]">Cerrado</span>
          </div>
        </div>

        <div className="mt-6 border-l-2 pl-4 border-black/20">
          <p className="text-sm text-black/70">
            Para consultas urgentes, te recomendamos contactar por{" "}
            <a
              href="https://wa.me/34614859357"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors hover:opacity-90"
              style={{ color: WHATSAPP }}
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </aside>
  );
}

function InfoItem({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 border border-black/10 bg-black/[0.02] flex items-center justify-center flex-shrink-0 text-[#1B123A]">
        {icon}
      </div>

      <div className="pt-[2px]">
        <h3 className="text-xl font-semibold text-[#1B123A]">{title}</h3>
        <div className="mt-2">{content}</div>
      </div>
    </div>
  );
}
