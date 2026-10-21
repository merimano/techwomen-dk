// Posts a form to the Google Apps Script web app that writes to the board's
// Google Sheet. The script picks the sheet tab from `form` (see the script
// in the sheet: Extensions → Apps Script).
//
// The URL is shared by every form on the site; the variable keeps its
// original name so the Vercel setting doesn't need to change.
const ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT;

export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitToSheet(form: string, fields: Record<string, string>): Promise<SubmitResult> {
  if (!ENDPOINT) return { ok: false, error: "not_configured" };

  const body = new URLSearchParams({ form, source: window.location.href, ...fields });
  try {
    // A form-encoded body avoids a CORS preflight, which Apps Script can't answer.
    const res = await fetch(ENDPOINT, { method: "POST", body });
    const json = (await res.json()) as { ok: boolean; error?: string };
    return json.ok ? { ok: true } : { ok: false, error: json.error ?? "unknown" };
  } catch {
    return { ok: false, error: "network" };
  }
}
