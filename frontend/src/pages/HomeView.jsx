// import React from 'react'
import ReviewButton from '../components/ReviewButton.jsx'
import BackToTop from '../components/BackToTop.jsx'
import HeroImg from '../components/HeroImage'
import ToppGlassar from '../components/ToppGlassar'
import styled from 'styled-components'

function HomeView() {
  return (

    <Body>
        <HeroImg></HeroImg>
        <ReviewButton></ReviewButton>
        <ToppGlassar></ToppGlassar>
    <BackToTop></BackToTop>
    </Body>
  )
}

export default HomeView

const Body = styled.body`
background-color: turquoise;
`
