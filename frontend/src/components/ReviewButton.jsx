// import React from 'react'
import styled from 'styled-components'
import popsicle1 from '../assets/popsicle1.png'
import popsicle2 from '../assets/popsicle2.png'
import {Link} from 'react-router-dom'

function ReviewButton() {
  return (
    <Link to="/glassar">
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
        </Link>
  )
}



export default ReviewButton

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
  position: relative;
  left: 60vw;
  padding: 1em;
  margin-top: 5vh;
`
const RecText = styled.div`
line-height: 0;
/* padding: 3em; */
justify-content: center;
align-items: center;
`
const GoTo = styled.p`
font-size: 1.5em;
text-align: start;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: black;
`
const Rec = styled.span`
font-size: 3em;
color: black;
text-align: start;
line-height: 1em;
padding-bottom: 1em;
`

const Popsicle1 = styled.img`
width: 3vw;
align-self: center;
transform: rotate(340deg);
padding-right: 1em;
`
const Popsicle2 = styled.img`
width: 3vw;
align-self: center;
transform: rotate(20deg);
`
const Popsicles = styled.div`
display: flex;
flex-direction: row;
/* width: 2vw; */
align-self: center;
`
