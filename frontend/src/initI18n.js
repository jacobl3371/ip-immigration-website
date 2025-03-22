import i18next from "i18next"
import { initReactI18next } from "react-i18next"

const initI18n = async () => {
    i18next.use(initReactI18next).init({
        fallbackLng: "en"
    })

    try {
        const response = await fetch("http://localhost:3000/api/fetchlanguage")
        const data = await response.json()
        const lang = data.language

        const module = await import(`./locales/${lang}.json`)
        i18next.addResourceBundle(lang, "translation", module.default || module)
        i18next.changeLanguage(lang)

    } catch (e) {
        console.error(e)
    }
}

export default initI18n