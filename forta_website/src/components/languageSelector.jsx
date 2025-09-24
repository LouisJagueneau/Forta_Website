import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import 'flag-icons'

function LanguageSelector() {
    const { i18n } = useTranslation()

    const languages = [
        { code: 'en', name: 'english', flag: 'gb', },
        { code: 'hr', name: 'croatia', flag: 'hr' },
        { code: 'fr', name: 'france', flag: 'fr' },
        { code: 'de', name: 'germany', flag: 'de' }
    ]

    const currentLang = i18n.language || defaultLang;

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem("lang", language)

    }

    useEffect(() => {
        const savedLang  = localStorage.getItem("lang") || "en"
        i18n.changeLanguage(savedLang)
    },[i18n])

    return (
        <div>
            <div className='group relative cursor-pointer'>
                <span className='flex gap-2 items-center font-poppins text-white uppercase'>{currentLang}<IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300" /></span>
                <ul className='hidden absolute text-white group-hover:flex group-hover:flex-col gap-2 z-50 bg-[#0f0f0f] pr-3 py-2 border-white'>
                    {languages.filter((l) => l.code !== currentLang).map((language) => {
                        return (
                            <li
                                key={language.name}
                                onClick={() => {
                                    changeLanguage(language.code.toLocaleLowerCase());
                                }}
                                className={`uppercase flex items-center gap-3`}>
                                {language.code}
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default LanguageSelector