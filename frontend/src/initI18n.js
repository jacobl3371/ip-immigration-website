import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import defaultLang from "./locales/us.json";
import { languages } from "./locales/lang";

const VITE_BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;

const initI18n = async () => {
  i18next.use(initReactI18next).init({
    fallbackLng: "us",
  });
  i18next.addResourceBundle("us", "translation", defaultLang);

  try {
    const response = await fetch(`${VITE_BACKEND_API_URL}/fetchlanguage`);
    const data = await response.json();
    const lang = data.region;

    languages.map(async (lang) => {
      const module = await import(`./locales/${lang.code}.json`);
      i18next.addResourceBundle(
        lang.code,
        "translation",
        module.default || module
      );
    });
    if (!languages.includes(lang)) {
      i18next.changeLanguage("us");
      return 
    }
                                                                            
    i18next.changeLanguage(lang);
  } catch (e) {
    console.error(e);
  }
};

export default initI18n;
