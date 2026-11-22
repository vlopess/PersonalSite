import Translator from "../../i18n/Translator.js"
import { Card } from "../Card/Card.jsx"
import { ContatosList } from "../ContatosList/ContatosList.jsx"
import { Divider } from "../Divider/Divider.jsx"

export const Contact = () => (
    <section id="content-contacts">
        <Divider text={<Translator path="divider.contato"/>}/>
        <Card height={100}>
            <ContatosList/>
        </Card>
    </section>
)
