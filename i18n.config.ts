import es from "./locales/es.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import pt from "./locales/pt.json";
import de from "./locales/de.json";
import ar from "./locales/ar.json";
import tr from "./locales/tr.json";
import it from "./locales/it.json";
import lt from "./locales/lt.json";
import zh from "./locales/zh.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en,
    es,
    fr,
    pt,
    de,
    ar,
    tr,
    it,
    lt,
    zh,
  },
}));
