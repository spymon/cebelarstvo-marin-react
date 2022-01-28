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
} from '../LoginSection/LoginElements'
import { register } from '../../redux/User/user.actions'
import { MessageBox } from '../MessageBox'
import LoadingBox from '../LoadingBox'

export const SignupSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const userRegister = useSelector(state => state.userRegister)
  const { error, loading } = userRegister
  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Ponovno geslo se ne ujema.')
    } else {
      dispatch(register(name, email, password))
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

            {error && <MessageBox error>{error}</MessageBox>}

            {loading && <LoadingBox />}

            <FormControl>
              <FormLabel darkColor>Ime:</FormLabel>
              <FormInput
                lightGray
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
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
              <FormLabel darkColor>Ponovno geslo:</FormLabel>
              <FormInput
                lightGray
                type="password"
                required
                value={confirmPassword}
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
