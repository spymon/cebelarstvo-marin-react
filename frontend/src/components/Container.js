import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  padding: 0 30px 4rem;
  min-height: 100vh;
  background-color: ${({ dark }) => (dark ? '#35363a' : '#fff')};
`
