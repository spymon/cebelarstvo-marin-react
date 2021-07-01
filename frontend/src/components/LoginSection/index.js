import React, { useState } from 'react'
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
  NavBtn,
  NavBtnLink,
} from '../Navbar/NavbarElements'
import logoImage from '../../images/CebelarstvoMarin_logotip.jpg'
import {
  AccountInfoForm,
  AccountInfoHeading,
  AccountInfoWelcomeText,
  RegistrationBtn,
  TextWrapper,
} from './LoginElements'
import axios from 'axios'
/* import { MessageBox } from '../MessageBox'
import LoadingBox from '../LoadingBox' */

export const LoginSection = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = axios.post('/api/users/login', { email, password })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoWrapper to="/">
            <NavLogoImg src={logoImage} alt="Cebelarstvo marin" />
          </NavLogoWrapper>
          <NavBtn>
            <NavBtnLink to="/register">Registrirajte Se</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <Container center>
        <ContentWrapper oneColumn>
          <AccountInfoForm onSubmit={handleSubmit}>
            <AccountInfoHeading>Prijava</AccountInfoHeading>
            <AccountInfoWelcomeText>
              Dobrodošli nazaj! <br /> Prijavite se, da lahko opravite spletni
              nakup.
            </AccountInfoWelcomeText>

            {/* <MessageBox></MessageBox> */}
            {/* <LoadingBox /> */}

            <FormControl>
              <FormLabel darkColor>Email:</FormLabel>
              <FormInput
                lightGray
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel darkColor>Geslo:</FormLabel>
              <FormInput
                lightGray
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
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
