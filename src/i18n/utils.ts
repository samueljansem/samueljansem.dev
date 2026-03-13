import { defaultLocale, ui, type Locale } from "./ui";

export function getLangFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split("/");
	if (lang in ui) return lang as Locale;
	return defaultLocale;
}

export function useTranslations(lang: Locale) {
	return function t(key: keyof (typeof ui)[typeof defaultLocale]): string {
		return ui[lang][key] ?? ui[defaultLocale][key];
	};
}

export function getLocalizedPath(path: string, lang: Locale): string {
	if (lang === defaultLocale) return path;
	return `/${lang}${path}`;
}
