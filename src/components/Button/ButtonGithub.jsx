import "./Button.css"
import Translator from "../../i18n/Translator.js";
import { GithubLogo } from "@phosphor-icons/react"

export const ButtonGithub = ({url}) => {
    return (
        <a className="btn-action" href={url} target="_blank" rel="noopener noreferrer">
            <GithubLogo size={16} weight="duotone" />
            <span><Translator path="button.github"/></span>
        </a>
    )
}
