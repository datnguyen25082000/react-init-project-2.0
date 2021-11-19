/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<any, any>> {
  readonly VITE_API_URL: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
