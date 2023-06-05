// import React from 'react'
import ReviewButton from '../components/ReviewButton.jsx'
import BackToTop from '../components/BackToTop.jsx'
import hero from '../assets/hero.png'
import HeroImg from '../components/HeroImage'
import ToppGlassar from '../components/ToppGlassar'
import styled from 'styled-components'
import creamcursor from '../assets/smallcreamcursor.png'
import {Link} from 'react-router-dom'

function HomeView() {
  return (
  <Body>
    <StyledDiv>
      <StyledH1>BG Glace</StyledH1>
      <StyledP>Vi öppnar dörrarna till vårt glassälskar-community! Här kan ni njuta av en smakfull resa genom en oändlig värld av glass. Låt era smaklökar utforska en palett av sensationer och låt er inspiration flöda genom era recensioner. Varje åsikt har betydelse när vi gemensamt hyllar och utforskar de bästa glassarna.</StyledP>
      <Link to="/glassar">
        <StyledButton>Skriv en recension</StyledButton>
      </Link>
    </StyledDiv>
    <HeroImg hero={hero}></HeroImg>
    <ToppGlassar></ToppGlassar>
    <ReviewButton></ReviewButton>
    <BackToTop></BackToTop>
  </Body>
  )
}

export default HomeView

const Body = styled.div`
    overflow-x: hidden;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 7vw;
  z-index: 1;
  width: 35vw;
  height: 120vh;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 132vh;
    justify-content: end;
    left: 0;
    padding: 5vw;
    text-align: left;
    align-items: start;
    padding: 0;
  }
`;

const StyledH1 = styled.h1`
  font-family: 'Oregano';
  color: #222222;
  font-size: 4rem;
  margin-bottom: 0;
  @media screen and (max-width: 500px) {
    font-size: 3rem;
    background-color: #FFFFFF;
    padding: .3rem 2rem .3rem 1rem;
    border-radius: 0 4rem 4rem 0;
  }
`;

const StyledP = styled.p`
  font-family: 'Neucha';
  color: #222222;
  font-size: 1rem;
  @media screen and (max-width: 500px) {
    width: 85vw;
    text-align: center;
    background-color: #fef8b4;
    padding: 2rem 2rem;
    border-top: solid 1rem #e495ca;
    border-bottom: solid 1rem #e495ca;
    margin-top: 16rem;
  }
`;

const StyledButton = styled.button`
  font-family: 'Neucha';
  color: #222222;
  background-color: #F9C1D8;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: 0;
  border-radius: .5rem;
  margin: 1rem 0 5rem 0;
  cursor: url(${creamcursor}), auto;
  &:hover {
    background-color: #F9B6D2;
  }
  @media screen and (max-width: 500px) {
    margin: 0 5rem;
  }
`;
