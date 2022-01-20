import "./App.css";
import { useState } from "react";

import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MainNews from "./components/MainNews";
import Help from "./components/Help";
import Following from "./components/Following";
import LocalNews from "./components/LocalNews";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


// npm install react-icons
// npm install react-router-dom
// npm i react-loader-spinner
// npm i styled-components


// sudo snap install --classic heroku 
// heroku --version 
// https://devcenter.heroku.com/articles/heroku-cli 
// https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack 

function App() {
  const [searchText, setSearchText] = useState();
  
  const getSearchText = (text) => {
    setSearchText(text)
  }

  return (
    <div>     
        <NavBar getSearchText={getSearchText}/>
        <Routes>
          <Route path="/" element={<MainNews apiParam='de'getSearchText={getSearchText}/>} />
          <Route path="folgeich" element={<Following getSearchText={getSearchText}/>} />
          <Route path="deutschland" element={<MainNews apiParam='de'getSearchText={getSearchText}/>} />
          <Route path="welt" element={<MainNews apiParam='general' getSearchText={getSearchText}/>} />
          <Route path="lokalnachrichten" element={<LocalNews getSearchText={getSearchText}/>} /> 
          <Route path="wirtschaft" element={<MainNews apiParam='business' getSearchText={getSearchText}/>} />
          <Route path="wissenschaft" element={<MainNews apiParam='science' getSearchText={getSearchText}/>} />
          <Route path="technik" element={<MainNews apiParam='technology' getSearchText={getSearchText}/>} />
          <Route path="unterhaltung" element={<MainNews apiParam='entertainment' getSearchText={getSearchText}/>} />
          <Route path="sport" element={<MainNews apiParam='sports' />} getSearchText={getSearchText}/>
          <Route path="gesundheit" element={<MainNews apiParam='health' getSearchText={getSearchText}/>} />

          <Route path="suche" element={<MainNews searchText={searchText} apiParam='p' getSearchText={getSearchText}/>} />
          <Route path="covid" element={<MainNews searchText="Corona Covid" apiParam='p' getSearchText={getSearchText}/>} />

          <Route path="hilfe" element={<Help />} />
          <Route path="*" element={<MainNews apiParam='de'/>} />
        </Routes>          
    </div>
  );
}

export default App;
