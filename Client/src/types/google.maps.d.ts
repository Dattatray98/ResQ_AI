declare global {
  // Let TS know google exists
  const google: typeof import("@types/google.maps")["google"];

  interface Window {
    google: typeof google | undefined;
  }
}

export {};
