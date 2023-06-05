// import React from 'react'
import styled from 'styled-components'

function HeroImg({hero}) {
  return (
    <StyledDiv>
      <StyledImg src={hero} alt="Hero image" />
      <Box></Box>
    </StyledDiv>
  );
}

export default HeroImg;

const StyledDiv = styled.div`
    display: flex;
    justify-content: start;
`;

const StyledImg = styled.img`
    width: 100vw;
  @media screen and (max-width: 500px) {
    width: auto;
    height: 95vh;
  }
`;

const Box = styled.div`
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 135vh;
  }
`;
