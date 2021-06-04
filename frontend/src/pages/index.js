import React, { useState } from 'react'
import { HeroSection } from '../components/HeroSection'
import { Navbar } from '../components/Navbar'
import { ProductSection } from '../components/ProductSection'
import { Sidebar } from '../components/Sidebar'
import { Gallery } from '../components/Gallery'
import { AboutSection } from '../components/AboutSection'

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <ProductSection />
      <Gallery />
      <AboutSection />
    </>
  )
}
