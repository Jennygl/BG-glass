// import React from 'react'
import styled from 'styled-components'

function HeroImg({hero}) {
  return (
    <StyledDiv>
      <StyledImg src={hero} alt="Hero image" />
    </StyledDiv>
  );
}

export default HeroImg;

const StyledDiv = styled.div`
    display: flex;
    justify-content: start;
    @media screen and (max-width: 500px) {
    margin-bottom: 19rem;
    }
`;

const StyledImg = styled.img`
    width: 100vw;
  @media screen and (max-width: 500px) {
    width: auto;
    height: 95vh;
  }
`;
