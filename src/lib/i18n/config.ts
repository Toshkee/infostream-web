export const locales = ["eng", "mne"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "eng";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
