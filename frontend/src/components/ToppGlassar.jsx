// import React from 'react'
import styled ,{ keyframes }from 'styled-components'
import magnumImage from '../assets/magnum.png'
// import strutenImage from '../assets/struten.png'
// import struten2Image from '../assets/struten2.png'
import ratedImage from '../assets/rate_popsicle.png'
import unratedImage from '../assets/unrated_popsicle.png'
import solero from '../assets/glass/solero.png'
import daim from '../assets/glass/daim.png'
import magnum from '../assets/glass/magnum_classic.png'
import piggelin from '../assets/glass/piggelin.png'
import Tiptop from '../assets/glass/tiptop.png'
import Twister from '../assets/glass/twister.png'
import Calippo from '../assets/glass/calippo.png'
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
     case 'Tiptop':
            return Tiptop;
     case 'Calippo Cola':
            return Calippo;
     case 'Twister':
            return Twister;

      default:
        return magnumImage
}
  }

  return (
    <div>


    <Wrapper>
<HEADING> TOPPGLASSAR</HEADING>
<ICON><ion-icon name="chevron-down-outline"></ion-icon></ICON>
    <FirstPair>
  {glassar.length > 0 && (
    <>
    <FirstImage src={glassBild(glassar[0].namn)} alt="ice cream picture" />
    <FirstText>
    <NAME>{glassar[0].namn}</NAME>
      <RATING>  {rating(glassar[0].betyg)}</RATING>
      <Quote>&quot;{glassar[0].rec}&quot;</Quote>
      <NAME>-{glassar[0].recensent}</NAME>
    </FirstText>
    </>
  )}
</FirstPair>

      <SecondPair>
        {glassar.length>0 &&(<><SecondText>
                <NAME>{glassar[1].namn}</NAME>
                      <RATING> {rating(glassar[1].betyg)} </RATING>
                      <Quote>&quot;{glassar[1].rec}&quot;</Quote>
                      <NAME>-{glassar[1].recensent}</NAME>
                  </SecondText><SecondImage src={glassBild(glassar[1].namn)} alt="ice cream picture" /></>
            )}

      </SecondPair>

      <ThirdPair>

        {glassar.length >0 &&(
         <>
         <ThirdImage src={glassBild(glassar[2].namn)} alt="ice cream picture" /><ThirdText>
         <NAME>{glassar[2].namn}</NAME>
                          <RATING>{rating(glassar[2].betyg)} </RATING>
                          <Quote>&quot;{glassar[2].rec}&quot;</Quote>
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

@media screen and (max-width: 500px) {
   height: 1.5rem;
}
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 250vh;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;

  @media screen and (max-width: 500px) {
    height:95vh;

}
`

const FirstPair = styled.div`
display: flex;
align-items: center;
margin-top: 10vh;
margin-right: 60%;
@media screen and (max-width: 500px) {
  margin: 1em auto;
}
`

const FirstText = styled.div`
background-color: #61aca0;
border-radius: 50%;
padding: 5vw;
display: inline-flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 15vw;
height: 15vw;
border: solid #FFF8B2;
color: #FFF8B2;
@media screen and (max-width: 500px) {
padding:17vw;
align-content: center;
/* margin:1em auto; */

}
`

const SecondPair = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin-left: 50%;
@media screen and (max-width: 500px) {
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
flex-direction: column;
justify-content: center;
width: 15vw;
height: 15vw;
border: solid #FFF8B2;
color: #FFF8B2;
@media screen and (max-width: 500px) {
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
@media screen and (max-width: 500px) {
    padding:17vw;
    align-content: center;
}
`

const FirstImage = styled.img`
  max-width: 20vw;
  height: auto;
  @media screen and (max-width: 500px) {
max-width:45vw;

}
`

const SecondImage = styled.img`
  max-width: 20vw;
  height: auto;
  @media screen and (max-width: 500px) {
max-width:45vw;

}
`

const ThirdImage = styled.img`
  max-width: 20vw;
  height: auto;
  @media screen and (max-width: 500px) {
    max-width:45vw;
}
`

const HEADING = styled.h1`
cursor: default;
font-style: normal;
font-size: 6rem;
text-align: center;
letter-spacing: 0.525em;
color: #FFFFFF;
/* text-shadow: 0 0 10px rgba(255, 248, 178, 0.5); */
font-family: 'Inconsolata';

  @media screen and (max-width: 500px) {
   width:100%;
   font-size: 2rem;
   text-align: center;
   justify-content: center;
   align-items: center;
   letter-spacing: 0.5em;

}
`
const RATING = styled.div`
font-size: 1.8rem;
display: flex;
font-size: 2rem;
line-height: 4rem;
@media screen and (max-width: 500px) {
   font-size: 1rem;
   line-height: 1.5;
}
`
const Quote = styled.div`
font-family: 'Indie Flower';
font-size: 2.2rem;
width:max-content;
@media screen and (max-width: 500px) {
    font-size: 1rem;

}
`
const NAME = styled.p`
font-family: 'Inconsolata';
font-style: normal;
font-weight: 400;
font-size: 1.8rem;
@media screen and (max-width: 500px) {
   font-size: 1rem;
   width:10rem;
   text-align: center;

}
`
const bounceAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
  100% { transform: translateY(0); }
`;

const ICON = styled.div`
font-size: 4rem;
color:white;
text-shadow: 0 0 10px rgba(255, 248, 178, 1);
animation: ${bounceAnimation} 5s infinite;
@media screen and (max-width: 500px) {
   font-size: 2rem;


}
`
