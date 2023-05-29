import React from 'react'
import styled from 'styled-components'
import magnumImage from '../assets/magnum.png'
import strutenImage from '../assets/struten.png'
import struten2Image from '../assets/struten2.png'

function ToppGlassar() {
  return (
    <div>
    <Wrapper>
      <FirstPair>
        <FirstImage src={magnumImage} alt="" />
        <FirstText><p>&quot;Den var rätt schysst&quot;
          - Glassätaren</p></FirstText>
      </FirstPair>
      <SecondPair>
        <SecondText><p>&quot;Den var rätt schysst&quot;
          - Glassätaren</p></SecondText>
        <SecondImage src={strutenImage} alt="" />
      </SecondPair>
      <ThirdPair>
        <ThirdImage src={struten2Image} alt="" />
        <ThirdText><p>&quot;Den var rätt schysst&quot;
          - Glassätaren</p></ThirdText>
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
  position: absolute;
  top: 0;
  left: 0;
  background-color: #78CDC0;
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
padding: 2vw;
display: inline-flex;
align-items: center;
justify-content: center;
width: 15vw;
height: 15vw;
border: solid #FFF8B2;
color: #FFF8B2;
font-family: fantasy;
font-size: 2rem;
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
