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
import hi from "./locales/hi.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import sw from "./locales/sw.json";
import nl from "./locales/nl.json";
import bn from "./locales/bn.json";
import ur from "./locales/ur.json";
import id from "./locales/id.json";
import fil from "./locales/fil.json";

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
    hi,
    ja,
    ko,
    sw,
    nl,
    bn,
    ur,
    id,
    fil,
  },
}));
