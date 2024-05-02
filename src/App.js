import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./Styles/App.scss"
import "./Styles/Header.scss"
import "./Styles/Home.scss"
import "./Styles/Footer.scss"
import "./Styles/Contact.scss"
import "./Styles/Mediaq.scss"

import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Components/Contact.jsx";
import Services from "./Components/Services.jsx";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/Contact" element={<Contact/>}  />
        <Route path="/Services" element={<Services/>}  />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
