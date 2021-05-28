import React, { useState } from 'react'
import { HeroSection } from '../components/HeroSection'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </>
  )
}
