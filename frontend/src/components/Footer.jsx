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


const Foot = styled.div`
position: relative;
bottom: 0;
left:0;
background: #FAC1DA;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
text-align: center;

width: 100%;
@media screen and (max-width: 500px) {
    height:40vh;
    justify-content:start;
    align-items: center;
    width:100%;

}
`
const Ul = styled.ul`
display: flex;
justify-content:center;
align-items: center;
gap: 3rem;
@media screen and (max-width: 500px) {

}
`
const Icons = styled.li`
list-style: none;
margin-top: 1vh;
font-size: 3rem;
flex-wrap: wrap;
color:black;
margin-bottom: 2rem;
@media screen and (max-width: 500px) {
   font-size: 3rem;
}

`
const Team = styled.p `
 text-align: center;
    top: 70%;
    left: 3%;
    right: 0;
    margin: auto;
    position: absolute;
   z-index: 99999;
  color: black;
  font-family: 'Inconsolata';
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.015rem;
  color: #000000;
  @media screen and (max-width: 500px) {
   font-size: 1.2rem;
   text-align: center;
    top: 30%;
    left: 3%;
    margin: auto;
    position: absolute;
}
`;
