import {Link} from 'react-router-dom'
import styled from 'styled-components'
import BackImg from '../assets/BackUp.png'
import PinkBackImg from '../assets/BackUpPink.png'

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

        <BackArrow
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
font-size:1.5em;
text-align: center;
font-family: 'Neucha';
`

const BackArrow = styled.img`
width:5vw;
@media (max-width: 550px) {
    width: 9vw;
  }

`
const StyledLink = styled(Link)`
display: flex;
flex-direction: column;
text-decoration: none;
align-items: center;
font-size:1em;
color: #FFF8B2;
width: 20vw;
margin: 0 auto 0 auto;
&:hover {
    color: #FAC1D9;
    }
    &:hover > img{
        content: url(${PinkBackImg})
    }
`
