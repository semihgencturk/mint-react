import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Community from "./pages/Community";
import DataScience from "./pages/DataScience";
import Cyber from "./pages/Cyber";
import Blockchain from "./pages/Blockchain";
import Ai from "./pages/Ai";
import Teams from "./pages/Teams";
import Aurora from "./pages/Aurora";
import Astrid from "./pages/Astrid";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sponsorluk" element={<Contact />} />
        <Route path="/Iletisim" element={<Contact />} />
        <Route path="/Etkinlikler" element={<Events />} />
        <Route path="/Topluluklar" element={<Community />} />
        <Route path="/Topluluklar/Ytu-Veri-Bilimi" element={<DataScience />} />
        <Route path="/Topluluklar/Ytu-Siber-Guvenlik" element={<Cyber />} />
        <Route path="/Topluluklar/Ytu-Blockchain" element={<Blockchain />} />
        <Route path="/Topluluklar/Mint-Yapay-Zeka" element={<Ai />} />
        <Route path="/Takimlar" element={<Teams />} />
        <Route path="/Takimlar/Aurora-UAV" element={<Aurora />} />
        <Route path="/Takimlar/Astrid-Otonom" element={<Astrid />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
