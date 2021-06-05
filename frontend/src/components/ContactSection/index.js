import React from 'react'
import { Container } from '../Container'
import { ContentWrapper } from '../ContentWrapper'
import { HeadingH2 } from '../HeadingH2'
import { ContactCard } from './ContactCard'
import { ContactForum } from './ContactForum'

export const ContactSection = () => {
  return (
    <div>
      <Container dark id="contact">
        <HeadingH2>Kontakt</HeadingH2>
        <ContentWrapper>
          <ContactCard />
          <ContactForum />
        </ContentWrapper>
      </Container>
    </div>
  )
}
