import React from 'react'
import styled from 'styled-components'
import { useState } from "react";
import betyg0 from '../assets/betyg/betyg0.png'
import betyg1 from '../assets/betyg/betyg1.png'
import betyg2 from '../assets/betyg/betyg2.png'
import betyg3 from '../assets/betyg/betyg3.png'
import betyg4 from '../assets/betyg/betyg4.png'
import betyg5 from '../assets/betyg/betyg5.png'
import Daim from '../assets/glass/daim.png'
import Magnum from '../assets/glass/magnum_classic.png'
import Piggelin from '../assets/glass/piggelin.png'
import Solero from '../assets/glass/solero.png'
import Tiptop from '../assets/glass/tiptop.png'
import Twister from '../assets/glass/twister.png'
import Calippo from '../assets/glass/calippo.png'
import creamcursor from '../assets/smallcreamcursor.png'

const RecCards = ({recensioner}) => {

    const [openIndex, setOpenIndex] = useState(null)

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };

  return (
    <>
        <StyledDiv>
            {recensioner.map((recension, index)=>(
            <RecensionWrapper key={index}>
            <GlassBild> {
                recension.namn === "Daim" ? <Bild src={Daim} alt="Daim"/> :
                recension.namn === "Magnum Classic" ? <Bild src={Magnum} alt="Magnum"/> :
                recension.namn === "Piggelin" ? <Bild src={Piggelin} alt="Piggelin"/> :
                recension.namn === "Solero" ? <Bild src={Solero} alt="Solero"/> :
                recension.namn === "Tiptop" ? <Bild src={Tiptop} alt="Tiptop"/> :
                recension.namn === "Twister" ? <Bild src={Twister} alt="Twister"/> :
                recension.namn === "Calippo Cola" ? <Bild src={Calippo} alt="Calippo"/> :
                'Bild saknas'}
            </GlassBild>
            <RecensionerDiv>
                <GlassBetygDiv>
                    <GlassNamn>{recension.namn}</GlassNamn>
                    <Betyg> {
                    recension.betyg === 0 ? <StyledImg src={betyg0} alt="Betyg 0"/> :
                    recension.betyg === 1 ? <StyledImg src={betyg1} alt="Betyg 1"/> :
                    recension.betyg === 2 ? <StyledImg src={betyg2} alt="Betyg 2"/> :
                    recension.betyg === 3 ? <StyledImg src={betyg3} alt="Betyg 3"/> :
                    recension.betyg === 4 ? <StyledImg src={betyg4} alt="Betyg 4"/> :
                    recension.betyg === 5 ? <StyledImg src={betyg5} alt="Betyg 5"/> :
                    'Betyg saknas'} </Betyg>
                    <AccordionButton onClick={() => toggleAccordion(index)}>
                    {openIndex === index ? <ion-icon name="chevron-up-outline"></ion-icon> : <ion-icon name="chevron-down-outline"></ion-icon>}
                    </AccordionButton>
                    <StyledP>Recension av {recension.recensent}</StyledP>
                </GlassBetygDiv>
                {openIndex === index && (
                    <div>
                        <Recension> "{recension.rec}" </Recension>
                        <StyledP>Smak: {recension.smak}</StyledP>
                        <StyledP>Laktosfri: {recension.laktos ? 'Nej' : 'Ja'}</StyledP>
                        <StyledP>Innehåller nötter: {recension.notter ? 'Ja' : 'Nej'}</StyledP>
                    </div>
                 )}
            </RecensionerDiv>
            </RecensionWrapper>
            ))}
        </StyledDiv>
    </>
  )
}

export default RecCards

const StyledDiv = styled.div`
    margin-bottom: 10vh;
`;


const RecensionerDiv = styled.div`
    width: 30rem;
    background-color: #78CDC0;
    border: solid 3px #FFFFFF;
    border-radius: 5px;
    margin: 1rem 5rem 1rem 1rem;
    padding: 1rem 1rem;
    @media screen and (max-width: 500px) {
        width: 12rem;
        margin: 0rem 2.5rem 2.5rem 0;
        padding: 1.2rem 1.2rem .9rem 1.2rem;
    }
`;

const GlassBetygDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    align-items: center;
    @media screen and (max-width: 500px) {
        grid-template-columns: auto;
        grid-template-rows: auto auto auto;
    }
`;

const AccordionButton = styled.div`
    grid-column: 6;
    font-size: 3rem;
    color: #FFFFFF;
    width: 3rem;
    height: 3rem;
    cursor: url(${creamcursor}), auto;
    margin-bottom: .7rem;
    @media screen and (max-width: 500px) {
        grid-column: 1;
        grid-row: 4;
        margin: 0 0 0 9.5rem;
        padding: 0;
    }
`;

const GlassNamn = styled.h3`
    grid-column: 1/2;
    font-family: 'Neucha';
    color: #FFFFFF;
    font-size: 2rem;
    margin: 0;
    width: 15rem;
`;

const Betyg = styled.p`
    grid-column: 3/4;
    font-family: 'Neucha';
    margin: 0;
    @media screen and (max-width: 500px) {
        grid-column: 1;
        grid-row: 2;
    }
`;

const StyledImg = styled.img`
    width: 9rem;
    @media screen and (max-width: 500px) {
        margin: .9vh 0;
    }
`;

const Recension = styled.p`
    font-family: 'Indie Flower';
    color: #FFF8B2;
    font-size: 1.5rem;
     @media screen and (max-width: 500px) {
        font-size: 1.3rem;
        margin-top: 0;
    }
`;

const Bild = styled.img`
    width: 10rem;
`;

const GlassBild = styled.div`

`;

const RecensionWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: .7rem;
`;

const StyledP = styled.p`
    font-family: neucha;
    color: #FFFFFF;
    margin: 0;
    @media screen and (max-width: 500px) {
        grid-column: 1;
        grid-row: 3;
        margin-bottom: .2rem;
    }
`;
