import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Home from "./Home";
import Layout from "./Layout";
import NoPage from "./NoPage1";
import Vtipy from "./Vtipy";





export default function App() {

    const [vybranyVtip, nastavVybranyVtip] = useState("")

    return (
        <HashRouter>
            <Layout vybranyVtip={vybranyVtip}/>
            <Routes >
                    <Route index element={<Home />} />
                    <Route path="/vtipy" element={<Vtipy vybranyVtip={vybranyVtip} nastavVybranyVtip={nastavVybranyVtip} />} />
                    <Route path="*" element={<NoPage />} />
            </Routes>
        </HashRouter>
    )
};