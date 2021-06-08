import styled, { css } from 'styled-components'

export const MessageBoxWrapper = styled.div`
  padding: 10px;
  border-radius: 5px;
  ${({ error }) =>
    error &&
    css`
      color: #a02020;
      background-color: #ffd8d8;
    `}
  ${({ success }) =>
    success &&
    css`
      color: #20a020;
      background-color: #e3f8d2;
    `}
  ${({ info }) =>
    info &&
    css`
      color: #2020a0;
      background-color: #e0e0ff;
    `}
`
