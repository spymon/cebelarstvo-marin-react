import React from 'react'
import heroBackground from '../../images/herobg.jpg'
import { Button } from '../ButtonElement'
import { Container } from '../Container'
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ImageBg,
} from './HeroElements'

export const HeroSection = () => {
  return (
    <Container center>
      <HeroBg>
        <ImageBg src={heroBackground} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Med, katerega si želi vsak!</HeroH1>
        <HeroP>Velika izbira medenih izdelkov, pridelanih doma.</HeroP>
        <HeroBtnWrapper>
          <Button
            to="products"
            primary={1}
            big={1}
            fontbig={1}
            smooth={true}
            duration={300}
            spy={true}
            exact="true"
            offset={-100}
          >
            Naša ponudba
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </Container>
  )
}
