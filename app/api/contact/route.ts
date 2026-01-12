import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const reason = String(formData.get("reason") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !reason || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Email no válido." }, { status: 400 });
    }
    if (message.length < 10) {
      return NextResponse.json({ error: "El mensaje es demasiado corto." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || "luis.gasamare@gmail.com";
    const from = process.env.CONTACT_FROM || "GASAMARE <onboarding@resend.dev>";

    if (!resendApiKey) {
      return NextResponse.json({ error: "Falta RESEND_API_KEY en .env.local" }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    const subject = `Nuevo mensaje de contacto: ${reason}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2 style="margin: 0 0 12px;">Nuevo mensaje desde la web</h2>
        <p style="margin: 0 0 6px;"><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 6px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 0 0 6px;"><strong>Teléfono:</strong> ${escapeHtml(phone || "-")}</p>
        <p style="margin: 0 0 6px;"><strong>Motivo:</strong> ${escapeHtml(reason)}</p>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
        <p style="margin: 0;"><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap; margin: 8px 0 0;">${escapeHtml(message)}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      return NextResponse.json({ error: error.message || "Error enviando email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch {
    return NextResponse.json({ error: "Error procesando la solicitud." }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
