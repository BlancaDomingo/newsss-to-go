import "./App.css";

import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MainNews from "./components/MainNews";
import Help from "./components/Help";
import { useEffect, useState } from 'react';

// npm install react-icons
// npm install react-router-dom

function App() {
  const [news, setNews] = useState("");
 

  useEffect(() => {
    const newsAPI = `https://newsapi.org/v2/top-headlines?country=de&apiKey=1ac2aebda1c64e04a5bd4828db18f788`;

    fetch(newsAPI)
      .then((res) => res.json())
      .then((res) => {
        
        setNews(res.articles)
        
      })
      .catch(() => {
        alert('Error!!!')
      });
  }, []);

  return (
    <div>     
        <NavBar />
        <Routes>
          <Route path="/" element={<MainNews news={news} theme='Deutschland'/>} />
          <Route path="deutschland" element={<MainNews news={news} theme='Deutschland'/>} />
          <Route path="welt" element={<MainNews />} />

          <Route path="hilfe" element={<Help />} />
        </Routes>          
    </div>
  );
}

export default App;
