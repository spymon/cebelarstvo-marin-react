import React from 'react'
import { Container } from '../Container'
import { ContentWrapper } from '../ContentWrapper'
import { HeadingH2 } from '../HeadingH2'
import ProfilePicture from '../../images/abaut_profil_img.png'
import {
  AboutHeading,
  AboutQuote,
  AboutText,
  AboutWrapper,
  ImgWrapper,
  ProfileImg,
} from './AboutElements'

export const AboutSection = () => {
  return (
    <Container id="about">
      <HeadingH2 dark>O meni</HeadingH2>
      <ContentWrapper>
        <ImgWrapper>
          <ProfileImg src={ProfilePicture} />
        </ImgWrapper>
        <AboutWrapper>
          <AboutHeading>Peter Marin</AboutHeading>
          <AboutQuote>Čebelar po srcu in po duši</AboutQuote>
          <AboutText>
            Peter Marin, mladi čebelar iz Cvetkovcev v ormoški občini, se je
            čebelarstva samostojno lotil pred šestimi leti: "Začel sem tako
            rekoč čisto iz nič, saj je bilo edino, kar sem slišal o čebelarstvu,
            pripovedovanje moje mame Marije Marin, da sta se s čebelami nekoč
            ukvarjala njena oče in dedek. Kot lesarski tehnik sem prvo
            zaposlitev dobil pri čebelarstvu Medvedovih iz Cirkovc, kjer sem
            delal lesene panjske okvirje. Delo me je navdušilo, in ko sem začel
            s svojim čebelarstvom, sem si lahko vse iz lesa naredil sam in mi
            torej ni bilo treba vsega kupiti."
          </AboutText>
          <AboutText>
            Kasneje se je zaposlil v Lesnini in zadnja leta dela v ptujskem
            podjetju Mark metal. Začel je s tremi panji čebel, jih vsako leto
            dodal deset in ta čas jih ima 70.
          </AboutText>
        </AboutWrapper>
      </ContentWrapper>
    </Container>
  )
}
