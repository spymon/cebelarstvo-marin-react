import styled from 'styled-components'

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  width: 100%;
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-bottom: 3px solid #f7d433;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const HeroContent = styled.div`
  z-index: 5;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480) {
    font-size: 2rem;
  }
`

export const HeroP = styled.p`
  margin-top: 1.5rem;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 480) {
    font-size: 1.125rem;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
