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
    justify-content: center;
`;

const StyledImg = styled.img`
    width: 100vw;
`;
