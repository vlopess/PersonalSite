import Translator from '@/i18n/Translator';
import { WhatsappLogo } from "@phosphor-icons/react"
import './Services.css';

export const Services = () => {
    return (
        <section className="services-section">
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
                <a href="https://wa.me/5571984713025?text=Oi%20Victor!"
                    className="services-cta" target="_blank" rel="noopener noreferrer">
                    <WhatsappLogo size={18} weight="fill" />
                    <Translator path="service.button" />
                </a>
            </div>
        </section>
    )
}
