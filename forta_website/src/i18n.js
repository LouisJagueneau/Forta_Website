import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from './locales/fr.json'
import en from './locales/en.json'
import de from './locales/de.json'
import hr from './locales/hr.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: en},
            fr: {translation: fr},
            hr: {translation: hr},
            de: {translation: de},
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        } 
    })

    export default i18n