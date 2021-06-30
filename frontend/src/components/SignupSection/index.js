import React, { useState } from 'react'
import axios from 'axios'
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
} from '../LoginSection/LoginElements'
/* import { MessageBox } from '../MessageBox'
import LoadingBox from '../LoadingBox' */

export const SignupSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Ponovno geslo se ne ujema.')
    } else {
      const newUser = {
        name,
        email,
        password,
        confirmPassword,
      }
      try {
        const { data } = axios.post('/api/users/register', newUser)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
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
            <NavBtnLink to="/login">Prijavite se</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <Container center>
        <ContentWrapper oneColumn>
          <AccountInfoForm onSubmit={handleSubmit}>
            <AccountInfoHeading>Registracija</AccountInfoHeading>
            <AccountInfoWelcomeText>
              Dobrodošli! <br /> Ustvarite račun, za nakupovanje naših izdelkov.
            </AccountInfoWelcomeText>

            {/* <MessageBox></MessageBox> */}

            {/* <LoadingBox /> */}

            <FormControl>
              <FormLabel darkColor>Ime:</FormLabel>
              <FormInput
                lightGray
                type="text"
                required
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel darkColor>Email:</FormLabel>
              <FormInput
                lightGray
                type="email"
                required
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel darkColor>Geslo:</FormLabel>
              <FormInput
                lightGray
                type="password"
                required
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel darkColor>Ponovno geslo:</FormLabel>
              <FormInput
                lightGray
                type="password"
                required
                onChange={e => setConfirmPassword(e.target.value)}
              />
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
