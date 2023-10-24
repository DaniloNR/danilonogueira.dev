import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  ["en-US"]: () =>
    import("./src/dictionaries/en-US.json").then((module) => module.default),
  ["pt-BR"]: () =>
    import("./src/dictionaries/pt-BR.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries["en-US"]();
