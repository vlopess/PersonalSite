import {Route, Routes} from "react-router-dom";
import {ContentHome} from "../ContentHome/ContentHome.jsx";
import {Redirect} from "../Redirect/Redirect.jsx";


export const Content = () => {
    return (
        <>
            <Routes>
                <Route element={<ContentHome/>} path={"/"}></Route>
                <Route path="/app" element={<Redirect url="https://nullacademy.com.br/" />} />
            </Routes>
        </>
    )
}
