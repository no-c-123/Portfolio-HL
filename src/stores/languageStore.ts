import { atom } from 'nanostores';

export type Language = 'en' | 'es';

export const languageStore = atom<Language>('en');

export const setLanguage = (lang: Language) => {
  languageStore.set(lang);
};
