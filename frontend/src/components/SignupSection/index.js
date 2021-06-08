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
} from '../LoginSection/LoginElements'
/* import { MessageBox } from '../MessageBox'
import LoadingBox from '../LoadingBox' */

export const SignupSection = () => {
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
            <AccountInfoHeading>Registracija</AccountInfoHeading>
            <AccountInfoWelcomeText>
              Dobrodošli! <br /> Ustvarite račun, za nakupovanje naših izdelkov.
            </AccountInfoWelcomeText>

            {/* <MessageBox></MessageBox> */}

            {/* <LoadingBox /> */}

            <FormControl>
              <FormLabel darkColor>Ime:</FormLabel>
              <FormInput lightGray type="text" />
            </FormControl>
            <FormControl>
              <FormLabel darkColor>Priimek:</FormLabel>
              <FormInput lightGray type="text" />
            </FormControl>
            <FormControl>
              <FormLabel darkColor>Email:</FormLabel>
              <FormInput lightGray type="email" />
            </FormControl>
            <FormControl>
              <FormLabel darkColor>Telefon:</FormLabel>
              <FormInput lightGray type="text" />
            </FormControl>
            <FormControl>
              <FormLabel darkColor>Geslo:</FormLabel>
              <FormInput lightGray type="password" />
            </FormControl>
            <FormControl>
              <FormLabel darkColor>Ponovno geslo:</FormLabel>
              <FormInput lightGray type="password" />
            </FormControl>
            <FormControl>
              <FormBtn>Registracija</FormBtn>
            </FormControl>
            <TextWrapper>
              <p>Ste že naš uporabnik?</p>
              <RegistrationBtn to="/login">Prijavi se!</RegistrationBtn>
            </TextWrapper>
          </AccountInfoForm>
        </ContentWrapper>
      </Container>
    </>
  )
}
