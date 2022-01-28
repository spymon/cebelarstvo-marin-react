import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { MessageBox } from '../MessageBox'
import LoadingBox from '../LoadingBox'
import { signin } from '../../redux/User/user.actions'

export const LoginSection = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSignin = useSelector(state => state.userSignin)
  const { loading, userInfo, error } = userSignin
  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch(signin(email, password))
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

            {error && <MessageBox error>{error}</MessageBox>}
            {loading && <LoadingBox />}

            <FormControl>
              <FormLabel darkColor>Email:</FormLabel>
              <FormInput
                lightGray
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel darkColor>Geslo:</FormLabel>
              <FormInput
                lightGray
                type="password"
                required
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
