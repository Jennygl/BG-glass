import styled from 'styled-components'

function Navbar() {
  return (
    <>
    <Nav>
        <Ul>


      <Icon> <a className='cream' href='http://localhost:5173/'><ion-icon  name="ice-cream-outline"></ion-icon> </a></Icon>

    <Text>BG-Glace</Text>
    </Ul>
    </Nav>

    </>
  )
}

export default Navbar

// NAV
const Nav = styled.nav`
position: absolute;
z-index: 3;
top:0px;
height: 5.5rem;
width: 100vw;
background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 8.58%, rgba(0, 0, 0, 0) 59.62%);
display: flex;
@media screen and (max-width: 600px) {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.45) 3.58%, rgba(0, 0, 0, 0) 120.62%);
}

`

const Ul = styled.ul`
display: flex;
justify-content: start;
align-items: center;
padding-left: .4rem;
`

// NAV ICON
const Icon = styled.li`
font-size: 3.5rem;
list-style: none;
margin: .4rem .3rem 0 0;
@media screen and (max-width: 600px) {
 font-size: 3rem;
}
`

//NAV TEXT
const Text = styled.li`
font-family: 'Oregano';
list-style: none;
font-weight: 400;
font-size: 3rem;
color: #E690A3;
@media screen and (max-width: 600px) {
   font-size: 3rem;
}
`
