// import React from 'react'
import ReviewButton from '../components/ReviewButton.jsx'
import BackToTop from '../components/BackToTop.jsx'
import hero from '../assets/hero.png'
import HeroImg from '../components/HeroImage'
import ToppGlassar from '../components/ToppGlassar'

function HomeView() {
  return (

<>
        <HeroImg hero={hero}></HeroImg>
        <ReviewButton></ReviewButton>
        <ToppGlassar></ToppGlassar>
    <BackToTop></BackToTop>
</>
  )
}

export default HomeView
