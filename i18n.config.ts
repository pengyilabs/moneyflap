import es from "./locales/es.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import pt from "./locales/pt.json";
import de from "./locales/de.json";
import ar from "./locales/ar.json";

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
  },
}));
