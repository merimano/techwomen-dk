/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Apps Script web-app URL that appends waitlist signups to the sheet. */
  readonly VITE_WAITLIST_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
