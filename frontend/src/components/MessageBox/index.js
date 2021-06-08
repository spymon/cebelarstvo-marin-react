import React from 'react'
import { MessageBoxWrapper } from './MessageBoxElements'

export const MessageBox = ({ error, success, children, info }) => {
  return (
    <MessageBoxWrapper error={error} success={success} info={info}>
      {children}
    </MessageBoxWrapper>
  )
}
