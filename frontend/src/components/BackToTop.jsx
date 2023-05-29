import {Link} from 'react-router-dom'
import styled from 'styled-components'
import BackImg from '../assets/BackUp.png'

function BackToTop() {
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

    }
  return (
    <div>
        <StyledLink onClick={scrollToTop}>

        <Arrow
                src={BackImg}
                alt="Back to top"
                    />
                    <BackUp>Tillbaka till toppen</BackUp>
        </StyledLink>
        </div>
  )
}

export default BackToTop

const BackUp = styled.p`
font-size:1em;
text-align: center;
`

const Arrow = styled.img`
width:2vw;
`
const StyledLink = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
font-size:1em;
color: #FFF8B2;
&:hover {
    color: #FAC1D9;
    }
`
// const BackDiv = styled(Link)`
// /* display: flex;
// flex-direction: row;
// justify-content: center; */
// `
