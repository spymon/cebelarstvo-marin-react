import React from 'react'
import {
  FormWrapper,
  ForumBtn,
  ForumControl,
  ForumInput,
  ForumLabel,
  ForumText,
} from './ContactElements'

export const ContactForum = () => {
  return (
    <FormWrapper>
      <ForumControl>
        <ForumText>
          Vprašate nas lahko karkoli, z veseljem bomo odgovorili!
        </ForumText>
      </ForumControl>
      <ForumControl>
        <ForumLabel>Email:</ForumLabel>
        <ForumInput />
      </ForumControl>
      <ForumControl>
        <ForumLabel>Zadeva:</ForumLabel>
        <ForumInput />
      </ForumControl>
      <ForumControl>
        <ForumLabel>Sporočilo:</ForumLabel>
        <ForumInput />
      </ForumControl>
      <ForumControl>
        <ForumBtn>Pošlji</ForumBtn>
      </ForumControl>
    </FormWrapper>
  )
}
