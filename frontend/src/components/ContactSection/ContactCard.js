import React from 'react'
import { FaEnvelope, FaFacebookF, FaPhone, FaUser } from 'react-icons/fa'
import {
  ContactRow,
  ContactRowText,
  IconWrapper,
  ContactCardComponent,
} from './ContactElements'

export const ContactCard = () => {
  return (
    <div>
      <ContactCardComponent>
        <ContactRow>
          <IconWrapper>
            <FaUser />
          </IconWrapper>
          <ContactRowText>Peter Marin</ContactRowText>
        </ContactRow>
        <ContactRow>
          <IconWrapper>
            <FaPhone />
          </IconWrapper>
          <ContactRowText>051 209 683</ContactRowText>
        </ContactRow>
        <ContactRow>
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <ContactRowText>marinpeter30@gmail.com</ContactRowText>
        </ContactRow>
        <a
          href="https://www.facebook.com/cebelarstvo.marin?epa=SEARCH_BOX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactRow>
            <IconWrapper>
              <FaFacebookF />
            </IconWrapper>
            <ContactRowText>Čebelarstvo Marin</ContactRowText>
          </ContactRow>
        </a>
      </ContactCardComponent>
    </div>
  )
}
