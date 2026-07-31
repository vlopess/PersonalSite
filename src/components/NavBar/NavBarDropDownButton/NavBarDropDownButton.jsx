import { useState, useRef, useEffect } from "react"
import "./NavBarDropDownButton.css"
import { useTranslation } from "react-i18next"
import Translator from "../../../i18n/Translator.js"
import { Translate } from "@phosphor-icons/react"

const FLAGS = {
    "pt-BR": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'%3E%3Crect width='36' height='24' fill='%23009940'/%3E%3Cpolygon points='18,2 34,12 18,22 2,12' fill='%23FFCC00'/%3E%3Ccircle cx='18' cy='12' r='6' fill='%23302681'/%3E%3C/svg%3E",
    "en-US": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'%3E%3Crect width='36' height='24' fill='%23012169'/%3E%3Crect y='10' width='36' height='4' fill='%23fff'/%3E%3Crect x='16' width='4' height='24' fill='%23fff'/%3E%3C/svg%3E",
    es: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'%3E%3Crect width='36' height='24' fill='%23AD1519'/%3E%3Crect y='8' width='36' height='8' fill='%23FABD00'/%3E%3C/svg%3E",
    cs: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 24'%3E%3Crect width='36' height='24' fill='%23fff'/%3E%3Crect y='12' width='36' height='12' fill='%23D7141A'/%3E%3Cpolygon points='0,0 16,12 0,24' fill='%2311457E'/%3E%3C/svg%3E",
}

const LANGUAGES = [
    { code: "pt-BR", key: "navbar.burguer.pt" },
    { code: "en-US", key: "navbar.burguer.en" },
    { code: "es", key: "navbar.burguer.es" },
    { code: "cs", key: "navbar.burguer.cs" },
]

export const NavBarDropDownButton = () => {
    const { i18n } = useTranslation()
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, [])

    function handleChangeLanguage(language) {
        i18n.changeLanguage(language)
        setOpen(false)
    }

    return (
        <div className="lang-popup-wrapper" ref={ref}>
            <button
                className="lang-trigger"
                onClick={() => setOpen(!open)}
                aria-label="Change language"
                aria-expanded={open}
            >
                <Translate size={18} weight="duotone" />
            </button>
            <div className={`lang-popup${open ? " lang-popup--open" : ""}`} role="menu">
                <p className="lang-popup-header">
                    <Translator path="navbar.burguer.descricao" />
                </p>
                {LANGUAGES.map(({ code, key }) => (
                    <button
                        key={code}
                        className={`lang-option${i18n.language === code ? " lang-option--active" : ""}`}
                        onClick={() => handleChangeLanguage(code)}
                        role="menuitem"
                    >
                        <img className="lang-flag" src={FLAGS[code]} alt="" aria-hidden="true" />
                        <span><Translator path={key} /></span>
                    </button>
                ))}
            </div>
        </div>
    )
}
