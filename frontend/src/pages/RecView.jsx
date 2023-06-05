import { useEffect, useState } from "react";
import axios from 'axios'
import hero from '../assets/hero2.png'
import HeroImg from '../components/HeroImage'
import PostGlass from "../components/PostGlass";
import FilterComp from "../components/FilterComp";
import styled from 'styled-components'

const Glassar = () => {

    const [glassarna, setGlassar] = useState([])
    const [recensioner, setRecensioner] = useState([])

    useEffect(()=>{
        const fetchGlassar = async() =>{
            try {
                const res = await axios.get("http://localhost:8800/glassar")
            setGlassar(res.data)
            }
            catch (err){
                console.log(err);
            }
        }
    fetchGlassar()
    },[])

    useEffect(()=>{
        const fetchRecensioner = async() =>{
            try {
                const res = await axios.get("http://localhost:8800/recensioner")
            setRecensioner(res.data)
            }
            catch (err){
                console.log(err);
            }
        }
    fetchRecensioner()
    },[])

return(

    <Body>
        <StyledDiv>
                <StyledH1>Recensioner</StyledH1>
                <StyledP>Låt oss tillsammans sprida glädje genom våra recensioner! Dela dina smakupplevelser, ge betyg och låt oss upptäcka nya favoriter. Ditt bidrag är viktigt för att skapa en gemenskap av glädje och kunskap. Så ta en stund, skriv en recension och låt oss njuta av glassens fantastiska värld tillsammans!</StyledP>
        </StyledDiv>
        <HeroImg hero={hero}/>
        <PostGlass />
        <FilterComp glassarna={glassarna} recensioner={recensioner} />
    </Body>
)
}
export default Glassar

const Body = styled.body`
    overflow-x: hidden;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 7vw;
  z-index: 3;
  width: 35vw;
  height: 120vh;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media screen and (max-width: 390px) {
    width: 90vw;
    height: 90vh;
    left: 0;
    padding: 5vw;
  }
`;

const StyledH1 = styled.h1`
  font-family: 'Oregano';
  color: #222222;
  font-size: 4rem;
  margin-bottom: 0;
  @media screen and (max-width: 390px) {
    font-size: 3rem;
    margin-top: 0rem;
    background-color: #FFFFFF;
    padding: .8rem 2.5rem;
    border-radius: 3rem;
  }
`;

const StyledP = styled.p`
  font-family: 'Neucha';
  color: #222222;
  font-size: 1rem;
  @media screen and (max-width: 390px) {
    background-color: #fef8b4;
    padding: 2rem 2rem;
    position: absolute;
    top: 200vw;
    border-top: solid 1rem #e495ca;
    border-bottom: solid 1rem #e495ca;
  }
`;
