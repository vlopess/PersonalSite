import {Route, Routes} from "react-router-dom";
import {ContentHome} from "../ContentHome/ContentHome.jsx";
import {ContentAppTCC} from "../ContentAppTCC/ContentAppTCC.jsx";


export const Content = () => {
    return (
        <>
            <Routes>
                <Route element={<ContentHome/>} path={"/"}></Route>
                <Route element={<ContentAppTCC/>} path={"/ByteAcademy"}></Route>
                {/*<Route element={<ContentHome/>} path={"/app/blog"}></Route>*/}
            </Routes>
        </>
    )
}
