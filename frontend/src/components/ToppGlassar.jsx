// import React from 'react'
import styled from 'styled-components'
import magnumImage from '../assets/magnum.png'
// import strutenImage from '../assets/struten.png'
// import struten2Image from '../assets/struten2.png'
import ratedImage from '../assets/rate_popsicle.png'
import unratedImage from '../assets/unrated_popsicle.png'
import solero from '../assets/glass/solero.png'
import daim from '../assets/glass/daim.png'
import magnum from '../assets/glass/magnum_classic.png'
import piggelin from '../assets/glass/piggelin.png'
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
    const ratedPng = <IMG  src={ratedImage} alt="filled ice cream picture" />;
    const unratedPng = <IMG src={unratedImage} alt='filled-popsicle'/>
    const maxBetyg = 5;
    const bilder = [];

    for(let i =0;i<betyg;i++){
        bilder.push(ratedPng)
    }
    for(let i = betyg; i< maxBetyg;i++){
        bilder.push(unratedPng)
    }
 
    return bilder.map((bild, index) => <div className='ratedicon' key={index}>{bild}</div>);

  }
  const glassBild = (glassNamn)=>{
switch (glassNamn) {
    case 'Solero':
        return solero;
     case 'Daim':
        return daim;
     case 'Piggelin':
            return piggelin;
     case 'Magnum Classic':
            return magnum;
      default:
        return magnumImage
}
  }

  return (
    <div>


    <Wrapper>
<HEADING> <ion-icon name="arrow-down-outline"></ion-icon>TOPPGLASSAR<ion-icon name="sunny-outline"></ion-icon></HEADING>
    <FirstPair>
  {glassar.length > 0 && (
    <>
    <FirstImage src={glassBild(glassar[0].namn)} alt="ice cream picture" />
    <FirstText>
      <P>  {rating(glassar[0].betyg)}</P>
      <Quote>&quot;{glassar[0].rec}&quot;</Quote>
      <NAME>-{glassar[0].recensent}</NAME>
    </FirstText>
    </>
  )}
</FirstPair>

      <SecondPair>
        {glassar.length>0 &&(<><SecondText>
                      <P> {rating(glassar[1].betyg)} </P>
                      <Quote>&quot;{glassar[1].rec}&quot;</Quote>
                      <NAME>-{glassar[1].recensent}</NAME>
                  </SecondText><SecondImage src={glassBild(glassar[1].namn)} alt="ice cream picture" /></>
            )}

      </SecondPair>

      <ThirdPair>

        {glassar.length >0 &&(
         <>
         <ThirdImage src={glassBild(glassar[2].namn)} alt="ice cream picture" /><ThirdText>
                          <P>{rating(glassar[2].betyg)} </P>
                          <Quote>&quot; {glassar[2].rec} &quot;</Quote>
                          <NAME>-{glassar[2].recensent}</NAME></ThirdText>
                          </>)}

      </ThirdPair>
    </Wrapper>
    </div>
  )
}

export default ToppGlassar


const IMG = styled.img`
height: 3rem;

@media screen and (max-width: 391px) {
   height: 1.5rem;
}
`
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

  @media screen and (max-width: 391px) {
    height:100vh;

}
`

const FirstPair = styled.div`
display: flex;
align-items: center;
margin-top: 10vh;
margin-right: 60%;
@media screen and (max-width: 391px) {
  margin: 1em auto;
}
`

const FirstText = styled.div`
background-color: #61aca0;
border-radius: 50%;
padding: 4vw;
display: inline-flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
width: 15vw;
height: 15vw;
border: solid #FFF8B2;
color: #FFF8B2;
@media screen and (max-width: 391px) {
padding:17vw;
align-content: center;

}
`

const SecondPair = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin-left: 50%;
@media screen and (max-width: 391px) {
   flex-direction: row-reverse;
    margin:1em auto;
}
`

const SecondText = styled.div`
background-color: #61aca0;
border-radius: 50%;
padding: 4vw;
display: inline-flex;
align-items: center;
flex-wrap:wrap;
justify-content: center;
width: 15vw;
height: 15vw;
border: solid #FFF8B2;
color: #FFF8B2;
@media screen and (max-width: 391px) {
    padding:17vw;
align-content: center;
}
`
//Hämtar styling från FirstPair som props.
const ThirdPair = styled(FirstPair)`

`

const ThirdText = styled.div`
background-color: #61aca0;
border-radius: 50%;
padding: 4vw;
display: inline-flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 15vw;
height: 15vw;
border: solid #FFF8B2;
color: #FFF8B2;
@media screen and (max-width: 391px) {
    padding:17vw;
    align-content: center;
}
`

const FirstImage = styled.img`
  max-width: 20vw;
  height: auto;
  @media screen and (max-width: 391px) {

max-width:45vw;

}
`

const SecondImage = styled.img`
  max-width: 20vw;
  height: auto;
  @media screen and (max-width: 391px) {
max-width:45vw;

}
`

const ThirdImage = styled.img`
  max-width: 20vw;
  height: auto;
  @media screen and (max-width: 391px) {
    max-width:45vw;


}
`

const HEADING = styled.h1`
font-style: normal;
font-size: 5rem;
text-align: center;
letter-spacing: 0.525em;
color: #FFFFFF;
border: 1px solid;
font-family: 'Inconsolata';

  @media screen and (max-width: 395px) {
   width:80%;
   font-size: 1.5rem;
   text-align: center;
   justify-content: center;
   align-items: center;
   letter-spacing: 0.5em;

}
`
const P = styled.div`
line-height: 3.5rem;
letter-spacing: 0.015em;
font-size: 1.8rem;
display: flex;
font-family: 'Inconsolata';
font-style: normal;
font-weight: 400;
font-size: 2rem;
line-height: 4rem;
letter-spacing: 0.015em;
color: #FFF8B2;
@media screen and (max-width: 391px) {
   font-size: 1rem;
   line-height: 1.5;


}
`
const Quote = styled(P)`
font-family: 'Indie Flower';
font-size: 2.2rem;
@media screen and (max-width: 391px) {
   font-size: 1rem;
   line-height: 10px;

  line-height: 0.9rem;

}
`
const NAME = styled.p`
font-family: 'Inconsolata';
font-style: normal;
font-weight: 400;
font-size: 1.8rem;
@media screen and (max-width: 391px) {
   font-size: 1rem;
   line-height: 10px;

  width:fit-content;


}


`
