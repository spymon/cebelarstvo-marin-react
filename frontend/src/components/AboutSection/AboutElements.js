import styled from 'styled-components'

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ProfileImg = styled.img`
  max-width: 100%;
  box-shadow: 1px 3px 10px 0px rgba(51, 51, 51, 0.2);
  border-radius: 5px;
  object-fit: cover;
`

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const AboutHeading = styled.h3`
  color: #35363a;
  font-size: 2.5rem;
  text-transform: capitalize;
  line-height: 1.2;
`

export const AboutQuote = styled.h4`
  align-self: flex-start;
  font-size: 0.7rem;
  color: #666;
  border-bottom: 1px solid #666;
  text-transform: uppercase;
  margin-bottom: 2rem;
  letter-spacing: 2px;
`

export const AboutText = styled.p`
  color: #35363a;
  font-size: 1.1rem;
  text-align: justify;
  margin-bottom: 1rem;
`
