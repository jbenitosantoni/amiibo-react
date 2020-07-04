import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";
import backend from "i18next-xhr-backend";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: common_en
    },
    es: {
        translation: common_es
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(backend)
    .init({
        resources,
        fallbackLng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
