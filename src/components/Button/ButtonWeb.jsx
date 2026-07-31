import "./Button.css"
import Translator from "../../i18n/Translator.js";
import { Globe } from "@phosphor-icons/react"

export const ButtonWeb = ({url}) => {
    return (
        <a className="btn-action" href={url} target="_blank" rel="noopener noreferrer">
            <Globe size={16} weight="duotone" />
            <span><Translator path="button.web"/></span>
        </a>
    )
}
