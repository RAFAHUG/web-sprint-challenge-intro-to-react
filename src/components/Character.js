// Write your Character component here
import React from "react";
import styled from "styled-components";

const Pagetitle = styled.h1 `
    font-family: "OCR A Std", monospace;
    font-size: 3rem;
    letter-spacing:10px;
    color:#CC5704;
    margin: 3.5rem;
    border-bottom: solid;
`;

const Pageh2 = styled.h2 `
    font-family: "OCR A Std", monospace;
    font-size: 2rem;
    letter-spacing: 10px;
    color:#A3E4D7;
    text-transform: uppercase;
`;

function Character (props)  {
    const{character} = props; 

    return (
    <div> 
        <Pagetitle>CHARACTERS</Pagetitle>
            { character.map((item) => {
               return <Pageh2>{item.name}</Pageh2>
            })
            }
    </div>
    );
};

export default Character ; 