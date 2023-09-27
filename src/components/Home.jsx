import React from "react";
import styled from 'styled-components';
import './Home.module.css';
import { useState } from 'react';

const Container = styled.div`
    min-height : 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Box = styled.div`
    /* margin: 0 auto; */
    /* width: 20vw; */
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    /* align-items: flex-end; */
    /* text-align: right; */
`;
const Button = styled.div`
    margin: 0 auto;
    background-color: black;
    border: 1px solid transparent;
    color : white;
    /* display: inline; */
    padding: 10px;
    width: 180px;
    text-align: center;


    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        cursor: pointer;
    }
`;
const Heading = styled.div`
    margin: 0 auto;
    font-size: 65px;
    font-weight: 800;
`;
function Home(props) {
    
    return (
        <>
            <Container>
                <Box>
                    <img src="/images/dices.png" alt="" />
                </Box>
                <Box>
                    <Heading>
                        DICE GAME
                    </Heading>
                    <Button onClick={props.toggle}>
                        Play Game
                    </Button>
                </Box>
            </Container>
        </>
    );
}


export default Home;