import { useTranslation } from "react-i18next"
import "./ContatosList.css"
import img from "../../assets/png/kristine.png";
import { Envelope, MediumLogo, LinkedinLogo, GithubLogo, Code, GlobeIcon } from "@phosphor-icons/react"

export const ContatosList = () => {
    const { t } = useTranslation()
    return (
        <div className="contact-links">
            <a href="mailto:victorlopes9291@gmail.com"
               target="_blank"
               rel="noopener noreferrer"
               className="contact-link"
               aria-label={t("contact.email", "Email")}
            >
                <Envelope size={22} weight="duotone" />
            </a>

            <a href="https://medium.com/@Victorldev"
               target="_blank"
               rel="noopener noreferrer"
               className="contact-link"
               aria-label="Medium"
            >
                <MediumLogo size={22} weight="duotone" />
            </a>

            <a href="https://www.linkedin.com/in/victor-lopes-541380301/"
               target="_blank"
               rel="noopener noreferrer"
               className="contact-link"
               aria-label="LinkedIn"
            >
                <LinkedinLogo size={22} weight="duotone" />
            </a>

            <a href="https://github.com/vlopess"
               target="_blank"
               rel="noopener noreferrer"
               className="contact-link"
               aria-label="GitHub"
            >
                <GithubLogo size={22} weight="duotone" />
            </a>

            <a href="https://victorsites.pythonanywhere.com/"
               target="_blank"
               rel="noopener noreferrer"
               className="contact-link "
               aria-label="PythonAnywhere"
            >
                <GlobeIcon size={22} weight="duotone" />
            </a>
            <a href="https://kristnotes.com/victor"
               target="_blank"
               rel="noopener noreferrer"
               className="contact-link"
               aria-label="Kristnotes"
            >
                <img className="socialImg" width="40" height="40" alt="" src={img}/>
            </a>
        </div>
    )
}
