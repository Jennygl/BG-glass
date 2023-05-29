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
position: static;
top:0px;
height: 9.25rem;
background: linear-gradient(90deg, rgba(0, 0, 0, 0.45) 3.58%, rgba(0, 0, 0, 0) 64.62%);
display: flex;
align-items: center;
@media screen and (max-width: 600px) {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.45) 3.58%, rgba(0, 0, 0, 0) 120.62%);
}

`

const Ul = styled.ul`
display: flex;
justify-content: start;
align-items: center;
`

// NAV ICON
const Icon = styled.li`
font-size: 4.6rem;
list-style: none;
@media screen and (max-width: 600px) {
 font-size: 3rem;
}
`

//NAV TEXT
const Text = styled.li`
@import url('https://fonts.googleapis.com/css2?family=Oregano&display=swap');
font-family: 'Oregano', cursive;
list-style: none;
font-weight: 400;
font-size: 4.6rem;
color: #E690A3;
@media screen and (max-width: 600px) {
   font-size: 3rem;
}
`
