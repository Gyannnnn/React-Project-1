import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./Styles/App.scss"
import "./Styles/Header.scss"
import "./Styles/Home.scss"
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}  />
      </Routes>
    </Router>
  );
}

export default App;
