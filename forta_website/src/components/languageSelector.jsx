import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import 'flag-icons'

function LanguageSelector() {
    const { i18n } = useTranslation()
    const [open, setOpen] = useState(false)
    const [isSelected, setIsSelected] = useState('gb')

    const languages = [
        { code: 'EN', name: 'english', flag: 'gb', },
        { code: 'HR', name: 'croatia', flag: 'hr' },
        { code: 'FR', name: 'france', flag: 'fr' },
        { code: 'DE', name: 'germany', flag: 'de' }
    ]

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setOpen(false)
    }

    return (
        <div>
            <div className='group relative cursor-pointer'>
                <span className='flex gap-2 items-center font-poppins text-white uppercase'><span className={`fi fi-${isSelected}`}></span>{isSelected} <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300" /></span>
                <ul className='hidden absolute text-white group-hover:block z-50'>
                    {languages.map((language) => {
                        return (
                            <li
                                key={language.name}
                                onClick={() => setIsSelected(language.flag)}
                                className={`${isSelected === language.flag ? 'hidden' : 'block'} uppercase`}>
                                <span className={`fi fi-${language.flag}`}></span> {language.code}
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