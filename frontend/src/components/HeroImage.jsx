// import React from 'react'
import styled from 'styled-components'
import hero from '../assets/hero.png'

function HeroImg() {
  return (
    <StyledDiv>
      <StyledImg src={hero} alt="Hero image" />
    </StyledDiv>
  );
}

export default HeroImg;

const StyledDiv = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 10vh;
`;

const StyledImg = styled.img`
    width: 85vw;
`;
