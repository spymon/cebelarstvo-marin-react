import React from 'react'
import {
  FormBtn,
  FormControl,
  FormInput,
  FormLabel,
} from '../ContactSection/ContactElements'
import { Container } from '../Container'
import { ContentWrapper } from '../ContentWrapper'
import {
  Nav,
  NavbarContainer,
  NavLogoImg,
  NavLogoWrapper,
} from '../Navbar/NavbarElements'
import logoImage from '../../images/CebelarstvoMarin_logotip.jpg'
import {
  AccountInfoForm,
  AccountInfoHeading,
  AccountInfoWelcomeText,
  RegistrationBtn,
  TextWrapper,
} from './LoginElements'
/* import { MessageBox } from '../MessageBox'
import LoadingBox from '../LoadingBox' */

export const LoginSection = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoWrapper to="/">
            <NavLogoImg src={logoImage} alt="Cebelarstvo marin" />
          </NavLogoWrapper>
        </NavbarContainer>
      </Nav>
      <Container center>
        <ContentWrapper oneColumn>
          <AccountInfoForm>
            <AccountInfoHeading>Prijava</AccountInfoHeading>
            <AccountInfoWelcomeText>
              Dobrodošli nazaj! <br /> Prijavite se, da lahko opravite spletni
              nakup.
            </AccountInfoWelcomeText>

            {/* <MessageBox></MessageBox> */}
            {/* <LoadingBox /> */}

            <FormControl>
              <FormLabel darkColor>Email:</FormLabel>
              <FormInput lightGray type="email" />
            </FormControl>
            <FormControl>
              <FormLabel darkColor>Geslo:</FormLabel>
              <FormInput lightGray type="password" />
            </FormControl>
            <FormControl>
              <FormBtn>Prijava</FormBtn>
            </FormControl>
            <TextWrapper>
              <p>Ste novi uporabnik?</p>
              <RegistrationBtn to="/register">
                Registrirajte se!
              </RegistrationBtn>
            </TextWrapper>
          </AccountInfoForm>
        </ContentWrapper>
      </Container>
    </>
  )
}
