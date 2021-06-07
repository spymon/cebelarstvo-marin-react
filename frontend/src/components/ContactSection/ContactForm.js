import React from 'react'
import {
  FormWrapper,
  FormBtn,
  FormControl,
  FormInput,
  FormLabel,
  FormText,
  FormTextArea,
} from './ContactElements'

export const ContactForm = () => {
  return (
    <FormWrapper>
      <FormControl>
        <FormText>
          Vprašate nas lahko karkoli, z veseljem bomo odgovorili!
        </FormText>
      </FormControl>
      <FormControl>
        <FormLabel>Email:</FormLabel>
        <FormInput />
      </FormControl>
      <FormControl>
        <FormLabel>Zadeva:</FormLabel>
        <FormInput />
      </FormControl>
      <FormControl>
        <FormLabel>Sporočilo:</FormLabel>
        <FormTextArea />
      </FormControl>
      <FormControl>
        <FormBtn>Pošlji</FormBtn>
      </FormControl>
    </FormWrapper>
  )
}
