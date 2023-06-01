// import React from 'react'
import styled from 'styled-components'
import magnumImage from '../assets/magnum.png'
import strutenImage from '../assets/struten.png'
import struten2Image from '../assets/struten2.png'
import ratedImage from '../assets/rate_popsicle.png'
import unratedImage from '../assets/unrated_popsicle.png'
import { useEffect, useState } from "react";

import axios from 'axios'


// const images = [magnumImage,strutenImage,struten2Image]

function ToppGlassar() {
    const [glassar, setGlassar] = useState([])
    useEffect(()=>{
        const fetchGlassar = async() =>{
            try {
                const res = await axios.get("http://localhost:8800/")
                console.log(res.data);
            setGlassar(res.data)

            }
            catch (err){
                // console.log(err);
            }
        }

    fetchGlassar()
    },[])
//    glassar.splice(0,2).map((glass)=>{ console.log(glass)})
const rating = (betyg) => {
    const ratedPng = <img src={ratedImage} alt="filled ice cream picture" />;
    const unratedPng = <img src={unratedImage} alt='filled-popsicle'/>
    const maxBetyg = 5;
    const bilder = [];

    for(let i =0;i<betyg;i++){
        bilder.push(ratedPng)
    }
    for(let i = betyg; i< maxBetyg;i++){
        bilder.push(unratedPng)
    }
    // for (let i = 0; i < betyg; i++) {
    //   bilder.push(<img key={i} src={ratedImage} alt="ice cream picture" />);
    // }

    return bilder;
  }

  return (
    <div>


    <Wrapper>

    <FirstPair>

  <FirstImage src={magnumImage} alt="ice cream picture" />
  {glassar.length > 0 && (
    <FirstText>
      <P>  {rating(glassar[0].betyg)}</P>
      <P>&quot;{glassar[0].rec}&quot;</P>
      <P>-{glassar[0].recensent}</P>
    </FirstText>
  )}
</FirstPair>

      <SecondPair>
        {glassar.length>0 &&(<SecondText>
            <P> {rating(glassar[1].betyg)} </P>
            <P>&quot;{glassar[1].rec}&quot;</P>
            <P>-{glassar[1].recensent}</P>
            </SecondText>)}
        <SecondImage src={strutenImage} alt="ice cream picture" />
      </SecondPair>

      <ThirdPair>
        <ThirdImage src={struten2Image} alt="ice cream picture" />
        {glassar.length >0 &&(<ThirdText>
            <P>  {rating(glassar[2].betyg)} </P>
            <P>&quot; {glassar[2].rec} &quot;</P>
          <P>-{glassar[2].recensent}</P></ThirdText>)}

      </ThirdPair>
    </Wrapper>
    </div>
  )
}

export default ToppGlassar

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 200vh;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  /* background-color: #78CDC0; */
`

const FirstPair = styled.div`
display: flex;
align-items: center;
margin-top: 10vh;
margin-right: 60%;

`

const FirstText = styled.div`
background-color: #61aca0;
border-radius: 50%;
padding: 2.5vw;
display: inline-flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 15vw;
height: 15vw;
border: solid #FFF8B2;
color: #FFF8B2;



`
const P = styled.p`
width:fit-content;
font-family: fantasy;
font-size: 1.8rem;
`
const SecondPair = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin-left: 40%;
`

const SecondText = styled.div`
background-color: #61aca0;
border-radius: 50%;
padding: 2vw;
display: inline-flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 15vw;
height: 15vw;
border: solid #FFF8B2;
color: #FFF8B2;
font-family: fantasy;
font-size: 2rem;
`

const ThirdPair = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 40%;
`

const ThirdText = styled.div`
background-color: #61aca0;
border-radius: 50%;
padding: 2vw;
display: inline-flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 15vw;
height: 15vw;
border: solid #FFF8B2;
color: #FFF8B2;
font-family: fantasy;
font-size: 2rem;
`

const FirstImage = styled.img`
  max-width: 20vw;
  height: auto;
`

const SecondImage = styled.img`
  max-width: 20vw;
  height: auto;
`

const ThirdImage = styled.img`
  max-width: 20vw;
  height: auto;
`
