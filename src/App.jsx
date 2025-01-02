import './App.css'
import {NavBar} from "./components/NavBar/NavBar.jsx";
import {Content} from "./components/Content/Content.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import './i18n';

function App() {
  return (
    <>
        <NavBar/>
        <Content/>
        <Footer/>
    </>
  )
}

export default App
