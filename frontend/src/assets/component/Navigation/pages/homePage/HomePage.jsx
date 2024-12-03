import React from 'react'
import Hero from '../../../Hero/Hero'
import Stacks from '../../stacks/stacks'
import About from '../../../About/about'
import Slidered from '../../../slider/slider'
import Footer from '../../../Footer/Footer'
import News from '../../../Footer/new'

function HomePage() {
  return (
    <>
    <Hero/>
    <Stacks />
    <About/>
    <Slidered/>
    <News/>
    <Footer/>
    </>
  )
}

export default HomePage