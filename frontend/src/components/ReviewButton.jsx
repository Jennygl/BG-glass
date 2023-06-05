//Jennys komponent
//Knapp som tar användaren till sidan för recensioner


import React from 'react'
import styled from 'styled-components'
import popsicle1 from '../assets/popsicle1.png'
import popsicle2 from '../assets/popsicle2.png'
import arrow1 from '../assets/arrow.png'
import {Link} from 'react-router-dom'

function ReviewButton() {
  return (
    <RecBtnContainer className="RecBtnContainer">
        <Arrow
                    src={arrow1}
                    className="popsicle1"
                    alt="arrow"
                />
    <RecLink to="/glassar">
    <Circle className="circle">
        <RecText>
        <GoTo>Gå till</GoTo><Rec>recensioner</Rec>
        </RecText>
        <Popsicles><Popsicle1
                    src={popsicle1}
                    className="popsicle1"
                    alt="popsicle"
                />
        <Popsicle2
                    src={popsicle2}
                    className="popsicle1"
                    alt="popsicle"
                />
                </Popsicles>
        </Circle>
        </RecLink>
        </RecBtnContainer>
  )
}



export default ReviewButton

const RecBtnContainer = styled.div`
width:100vw;
height: 40vh;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
@media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const RecLink = styled(Link)`
text-decoration: none;`
const Circle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  height: 25vw;
  width: 25vw;
  border: 3px solid #FAC1D9;
  background-color: #fbfbfbb7;
  border-radius: 50%;
  padding: 1em;
  margin-top: 5vh;
  margin-right: 5vw;
  @media (max-width: 550px) {
    width: 40vw;
    height: 40vw;
    position: relative;
    bottom:9vh;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 5vh;
  }
`
const RecText = styled.div`
line-height: 0;
/* padding: 3em; */
justify-content: center;
align-items: center;
`
const GoTo = styled.p`
font-size: 2.5vw;
font-family: 'Neucha';
text-align: start;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: black;
@media (max-width: 550px) {
    font-size: 4vw;
  }
`
const Rec = styled.span`
font-size: 5vw;
font-family: 'Neucha';
color: black;
text-align: start;
line-height: 1em;
padding-bottom: 1em;
@media (max-width: 550px) {
    font-size: 9vw;
  }
`

const Arrow = styled.img`
width: 20vw;
position: relative;
bottom: 10vh;
align-self: flex-start;
margin-bottom: 4vh;
padding-right: 1em;
@media (max-width: 790px) {
    transform: rotate(20deg);
  }
@media (max-width: 550px) {
    width: 30vw;
    transform: rotate(50deg);
    bottom:0;
    margin-bottom: 0;
  }
  `
  const Popsicles = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  `
const Popsicle1 = styled.img`
width: 3.5vw;
align-self: center;
transform: rotate(340deg);
padding-right: 1em;
@media (max-width: 550px) {
    width: 5.5vw;
  }
`
const Popsicle2 = styled.img`
width: 3.5vw;
align-self: center;
transform: rotate(20deg);
@media (max-width: 550px) {
    width: 5.5vw;
  }
`
