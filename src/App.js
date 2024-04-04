import "./App.css";
import { BrowserRouter, Route, Routes  } from "react-router-dom"
import Contact from "./Componants/contact/Contact";
import Home from "./Componants/home/Home";
import Service from "./Componants/service/Service";
import WebDevelopment from "./Componants/service/WebDevelopment";
import Mobile from "./Componants/service/Mobile";
import Header from "./Componants/header/Header";
import Footer from "./Componants/footer/Footer";

function App() {
  return (
    <>
     <BrowserRouter>
      <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/mobile" element={<Mobile />} />

    </Routes>

    <Footer />

    </BrowserRouter>
    
    </>
  );
}

export default App;
