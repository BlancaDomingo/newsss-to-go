import "./App.css";
import { useState } from "react";

import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MainNews from "./components/MainNews";
import Help from "./components/Help";


// npm install react-icons
// npm install react-router-dom

function App() {
  const [searchText, setSearchText] = useState();
  
  const getSearchText = (text) => {
    setSearchText(text)
  }

  return (
    <div>     
        <NavBar getSearchText={getSearchText}/>
        <Routes>
          <Route path="/" element={<MainNews apiParam='de'/>} />
          <Route path="deutschland" element={<MainNews apiParam='de'/>} />
          <Route path="welt" element={<MainNews apiParam='general' />} />
         {/*  <Route path="localnachrichten" element={<MainNews apiParam={param}/>} /> */}
          <Route path="wirtschaft" element={<MainNews apiParam='business' />} />
          <Route path="wissenschaft" element={<MainNews apiParam='science' />} />
          <Route path="technik" element={<MainNews apiParam='technology' />} />
          <Route path="unterhaltung" element={<MainNews apiParam='entertainment' />} />
          <Route path="sport" element={<MainNews apiParam='sports' />} />
          <Route path="gesundheit" element={<MainNews apiParam='health' />} />

          <Route path="suche" element={<MainNews searchText={searchText} apiParam='p' />} />

          <Route path="hilfe" element={<Help />} />
          <Route path="*" element={<MainNews apiParam='de'/>} />
        </Routes>          
    </div>
  );
}

export default App;
