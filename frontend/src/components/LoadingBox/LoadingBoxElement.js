import styled from 'styled-components'
import { IconWrapper } from '../ContactSection/ContactElements'

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
`

export const LoadingIconWrapper = styled(IconWrapper)`
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 50%;
  background-color: #f7d433;
  box-shadow: 1px 3px 10px rgba(51, 51, 51, 0.2);
  @-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
`

export const LoadingImg = styled.img``

export const LoadingDots = styled.p`
  font-size: 4rem;
  line-height: 4rem;
  font-weight: bold;
  color: #f7d433;
  text-shadow: 0 2px 10px rgba(51, 51, 51, 0.2);
  margin-left: 1rem;
  transform: translateY(-25%);
`
