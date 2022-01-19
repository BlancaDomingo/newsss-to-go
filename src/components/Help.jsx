import React, { useState, useEffect } from "react";
import helpPic from "../hilfe.jpg";
import "./Help.css";
import { HelpData } from "./HelpData";
import styled from "styled-components";
import { Circles } from "react-loader-spinner";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  border-radius: 10px;
`;

/* 
position: relative;
height: 100vh;
background: #fff; */

const Container = styled.div`

`;
/* border-radius: 10px;
box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
position: absolute;
top: 30%; */


const Wrap = styled.div`
  background: white;
  color: #195e4b;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  
  h3 {
    padding: 1em;
    font-size: 1em;  
  }
  
  span {
    margin-right: 0.8em;
  }
`;

const Dropdown = styled.div`
  background: mintcream;
  padding: 1em;
  color: #195e4b;
  width: 100%;
  max-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: all 1s ease-in-out;
  p {
    width: 100%;
    border-radius: 5px;
    padding: 0.5em;
    font-size: 0.9em;
    margin-top: 0.5em;
    transition:all 0.3s ease;
  }
  p:hover {
    background-color: #caebe2;
  }
`;
/* 
border-bottom: 1px solid #195e4b;
border-top: 1px solid #195e4b; */

function Help() {
  const [clicked, setClicked] = useState(false);
  const [done, setDone] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  

  useEffect(() => {
    setTimeout(() => {     
      setDone(true);
    }, 1000);
  }, []);

  if (!done) {
    return (
      <div className="loader">
        <Circles
          height="150"
          width="150"
          color="#00da9d"
          arialLabel="loading..."
        />
      </div>
    );
  } else {
  return (
    <div className="help-page">
      <div className="help-container">
        <img src={helpPic} alt="helfende Leute" className="help-picture" />
        <h2>Wie können wir Ihnen helfen?</h2>
        <div className="accordion">
        <AccordionSection>
          <Container>
            {HelpData.map((item, index) => {
              return (
                <div key={index}>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h3>{item.question}</h3>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer1}</p>
                      <p>{item.answer2}</p>
                      <p>{item.answer3}</p>
                    </Dropdown>
                  ) : null}
                </div>
              );
            })}
          </Container>
        </AccordionSection>
        </div>
      </div>
    </div>
  );}
}

export default Help;
