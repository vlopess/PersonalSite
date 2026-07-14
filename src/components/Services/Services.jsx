import Translator from '@/i18n/Translator';
import './Services.css';


export const Services = () => {
    return (<>
        <section class="secao-servicos">
            <div class="titulo-secao">
                <span class="linha"></span>
                <h2>Serviços</h2>
                <span class="linha"></span>
            </div>

            <div class="card-servico">
                <div class="card-header">🎯 Desenvolvimento gratuito para causas sociais</div>
                <div class="card-body">
                    <Translator path={`service.title`} />
                <ul class="lista-servicos">
                    <li><Translator path={`service.item1`} /></li>
                    <li><Translator path={`service.item2`} /></li>
                    <li><Translator path={`service.item3`} /></li>
                    <li><Translator path={`service.item4`} /></li>
                </ul>
                <a href="https://wa.me/5571984713025?text=Oi%20Victor!" 
                    class="btn-cta" target="_blank">
                    <Translator path={`service.button`} />
                </a>
                </div>
            </div>
        </section>
    </>)
}
