import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  ["en-US"]: () =>
    import("./dictionaries/en-US.json").then((module) => module.default),
  ["pt-BR"]: () =>
    import("./dictionaries/pt-BR.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries["en-US"]();
