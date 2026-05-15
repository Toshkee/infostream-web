import { eng } from "./dictionaries/eng";
import { mne } from "./dictionaries/mne";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { eng, mne };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
