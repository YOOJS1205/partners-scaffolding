export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ENV: 'stg' | 'stglive' | 'live';
    }
  }
}
