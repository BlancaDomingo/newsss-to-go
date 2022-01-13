import "./App.css";

import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNews from "./components/MainNews";
import Help from "./components/Help";

// npm install react-icons
// npm install react-router-dom

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<MainNews />} />
        <Route path="deutschland" element={<MainNews />} />
        <Route path="welt" element={<MainNews />} />

        <Route path="hilfe" element={<Help />} />
        </Routes>
      </BrowserRouter>
      {/*  <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
