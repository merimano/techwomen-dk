/** @OnlyCurrentDoc */
// TechWomen DK — website forms endpoint (waitlist, get involved, partner deck).
// Each form writes to its own tab, created automatically on first use.

const SHEET_ID = ''; // leave empty when opened from the sheet (Extensions → Apps Script)

const FORMS = {
  waitlist: {
    tab: 'Waitlist',
    headers: ['Submitted at', 'First name', 'Email', 'Consent given', 'Consent text', 'Source page'],
    fields: ['firstName', 'email', 'consent', 'consentText', 'source'],
  },
  'get-involved': {
    tab: 'Get involved',
    headers: ['Submitted at', 'First name', 'Email', 'LinkedIn', 'Field', 'Contribute as', 'Topics',
      'Experience', 'How often', 'Anything else', 'Consent given', 'Consent text', 'Source page'],
    fields: ['firstName', 'email', 'linkedin', 'field', 'roles', 'topics',
      'experience', 'availability', 'notes', 'consent', 'consentText', 'source'],
  },
  partner: {
    tab: 'Partners',
    headers: ['Submitted at', 'Name', 'Work email', 'Company', 'Tier clicked', 'Consent given', 'Consent text', 'Source page'],
    fields: ['firstName', 'email', 'organisation', 'tier', 'consent', 'consentText', 'source'],
  },
};

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    if (p.company) return json({ ok: true }); // spam trap

    const form = FORMS[p.form || 'waitlist'];
    if (!form) return json({ ok: false, error: 'unknown_form' });

    p.firstName = String(p.firstName || '').trim();
    p.email = String(p.email || '').trim().toLowerCase();
    if (!p.firstName) return json({ ok: false, error: 'missing_name' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) return json({ ok: false, error: 'invalid_email' });
    if (p.consent !== 'true') return json({ ok: false, error: 'missing_consent' });

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = getSheet(form);
      // The waitlist only needs each email once; "get involved" may be sent again.
      if (form.tab === 'Waitlist' && sheet.getLastRow() > 1) {
        const emails = sheet.getRange(2, 3, sheet.getLastRow() - 1, 1).getValues().map(r => r[0]);
        if (emails.indexOf(p.email) !== -1) return json({ ok: true, duplicate: true });
      }
      const row = form.fields.map(f => f === 'consent' ? 'Yes' : safe(String(p[f] || '').slice(0, 1000)));
      sheet.appendRow([new Date()].concat(row));
      return json({ ok: true });
    } finally {
      lock.releaseLock();
    }
  } catch (err) {
    console.error('Form error: ' + err + '\n' + (err && err.stack));
    return json({ ok: false, error: String(err) });
  }
}

function getSheet(form) {
  const ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('No spreadsheet found: open this script from the sheet (Extensions → Apps Script).');
  let sheet = ss.getSheetByName(form.tab);
  if (!sheet) {
    sheet = ss.insertSheet(form.tab);
    sheet.appendRow(form.headers);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Stops values like "=HYPERLINK(...)" being run as spreadsheet formulas.
function safe(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
