import styled from 'styled-components'
import NavCream from '../assets/NavCream.png'

function Navbar() {
  return (
    <>
    <Nav>
      <Icon> <a className='cream' href='http://localhost:5173/'><img src={NavCream} alt="" /></a></Icon>
    </Nav>

    </>
  )
}

export default Navbar

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`

const Icon = styled.li`
font-size: 3.5rem;
list-style: none;
margin: .4rem .3rem 0 0;

img {
    height: auto;
    width: 12vw;
}

&:hover {
    img {
      filter: brightness(0.9);
    }
}

@media screen and (max-width: 600px) {
    img {
        height: auto;
        width: 20vw;
    }
}
`
