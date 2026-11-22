import { useTranslation } from "react-i18next"
import Translator from '@/i18n/Translator';
import { WhatsappLogo } from "@phosphor-icons/react"
import { Divider } from '../Divider/Divider.jsx';
import './Services.css';

export const Services = () => {
    const { t } = useTranslation();
    const greeting = encodeURIComponent(t("service.greeting", "Oi Victor!"));

    return (
        <section id="content-services">
            <Divider text={t("navbar.services")}/>
            <div className="services-card">
                <p className="services-title">
                    <Translator path="service.title" />
                </p>
                <ul className="services-list">
                    <li><Translator path="service.item1" /></li>
                    <li><Translator path="service.item2" /></li>
                    <li><Translator path="service.item3" /></li>
                    <li><Translator path="service.item4" /></li>
                </ul>
                <a href={`https://wa.me/5571984713025?text=${greeting}`}
                    className="services-cta" target="_blank" rel="noopener noreferrer">
                    <WhatsappLogo size={18} weight="fill" />
                    <Translator path="service.button" />
                </a>
            </div>
        </section>
    )
}
