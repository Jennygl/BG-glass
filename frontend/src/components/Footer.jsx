import styled from 'styled-components'

function Footer() {
  return (
    <Foot>
        <Ul>
        <Icons><a className='logos' href="https://instagram.com"><ion-icon name="logo-instagram"></ion-icon></a></Icons>
        <Icons><a className='logos' href='https://twitter.com/?lang=sv'><ion-icon name="logo-twitter"></ion-icon></a></Icons>
        <Icons><a className='logos' href="mailto:bg-glass@example.com"><ion-icon name="mail-outline"></ion-icon></a></Icons>
        </Ul>
       <Team>© Grupp 6 2023</Team>
    </Foot>
  )
}

export default Footer


const Foot = styled.footer`
position: relative;
bottom: 0;
height: 16rem;
background: #FAC1DA;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
margin:0;
`
const Ul = styled.ul`
display: flex;
padding-top:2rem;
margin:0;
gap: 4rem;
`
const Icons = styled.li`
list-style: none;
font-size: 4.6rem;
color:black;
@media screen and (max-width: 600px) {
   font-size: 3rem;
}

`
const Team = styled.p `
  color: black;
font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 0.015rem;
  color: #000000;
  @media screen and (max-width: 600px) {
   font-size: 1.2rem;
}
`;
