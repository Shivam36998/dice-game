/** @format */

import React, { useState } from "react";
import styled from "styled-components";


function NumberCard(props) {

  return (
    <Card onClick={props.selectionHandler} selected={props.selected}>
      <h1>{props.value}</h1>
    </Card>
  );
}
const Card = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  font-size: 24px;
  font-weight: 800;
  background-color: white;
  font-family: "Poppins", sans-serif;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  z-index: 100;

  &:hover {
    color: white;
    background-color: black;
    transition: 0.3s ease-in-out;
  }
  h1 {
    z-index: -10;
  }
  @media screen and (max-width:360px){
    font-size: 12px;
    width: 30px;
    height: 30px;
  }
`;

export default NumberCard;
