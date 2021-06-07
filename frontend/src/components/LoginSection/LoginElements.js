import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AccountInfoHeading = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 3px;
  padding-bottom: 7px;
  margin-bottom: 10px;
  border-bottom: 3px solid #f7d433;
  text-transform: uppercase;
  text-align: center;
`

export const AccountInfoWelcomeText = styled.p`
  color: #35363a;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const AccountInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 2rem;
  margin-top: 7.5rem;
  box-shadow: 1px 3px 10px 0px rgba(51, 51, 51, 0.2);
`

export const TextWrapper = styled.div`
  display: flex;
  font-size: 0.875rem;
  margin-top: 10px;
`

export const RegistrationBtn = styled(Link)`
  color: #0038c8;
  text-decoration: underline;
  margin-left: 10px;
`

export const StatusMessage = styled.div`
  width: 100%;
  color: red;
  text-align: start;
  font-size: 0.875rem;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #ffcece;
`
