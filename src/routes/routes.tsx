import { Routes, Route } from "react-router-dom";

import Home from "../screens/home/index";
import TermsConditions from "../screens/terms-conditions";
import PrivacyPolicy from "../screens/privacy-policy";
import Telepsychology from "../screens/telepsychology";

export default function appRoutes(){
    return(
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/terms" element={<TermsConditions/>} />
        <Route path="/politica-privacidade" element={<PrivacyPolicy/>} />
        <Route path="/telepsicologia" element={<Telepsychology/>} />
    </Routes>
    )
}