/// <reference types="@astrojs/client" />

interface ImportMetaEnv {
  // Add your own env variables here. Example:
  // readonly ADMIN_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
