export type ConsentState = {
  decided: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const KEY = "gasamare_cookie_consent_v1";
const MAX_AGE = 60 * 60 * 24 * 180;

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));

  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

function setCookie(name: string, value: string) {
  const secure =
    typeof window !== "undefined" &&
    window.location.protocol === "https:"
      ? "; Secure"
      : "";

  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax${secure}`;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
}

function deleteCookieEverywhere(name: string) {
  deleteCookie(name);

  if (typeof location === "undefined") return;
  const host = location.hostname;

  document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax; Domain=${host}`;
  if (!host.startsWith(".")) {
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax; Domain=.${host}`;
  }
}

function deleteCookiesByPrefix(prefix: string) {
  if (typeof document === "undefined") return;

  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (const c of cookies) {
    const [name] = c.split("=");
    if (name === prefix || name.startsWith(prefix)) {
      deleteCookieEverywhere(name);
    }
  }
}

function clearAnalyticsCookies() {
  deleteCookieEverywhere("_ga");
  deleteCookiesByPrefix("_ga_");
}

export function getConsent(): ConsentState | null {
  try {
    const raw = getCookie(KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as ConsentState;
    if (!parsed.decided) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function setConsent(data: {
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}) {
  const value: ConsentState = {
    decided: true,
    updatedAt: new Date().toISOString(),
    ...data,
  };

  setCookie(KEY, JSON.stringify(value));

  if (!value.analytics) {
    clearAnalyticsCookies();
  }

  window.dispatchEvent(new CustomEvent("gasamare:consent-updated"));
}

export function clearConsent() {
  deleteCookie(KEY);
  clearAnalyticsCookies();
  window.dispatchEvent(new CustomEvent("gasamare:consent-updated"));
}
