import styled from 'styled-components'

export const ContactCardComponent = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.3);
`

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  transition: all 0.2s ease-in-out;

  &:last-child {
    margin-bottom: 0;

    &:hover p {
      color: #f7d433;
      transition: all 0.2s ease-in-out;
    }
  }
`

export const ContactRowText = styled.p`
  font-size: 1.3rem;
  color: #fff;
  margin-left: 1.5rem;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #f7d433;
  font-size: 1.5rem;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.3);
`

export const FormControl = styled.div`
  width: 100%;
`

export const FormText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #f7d433;
  padding-bottom: 1rem;
`

export const FormLabel = styled.label`
  width: 100%;
  color: ${({ darkColor }) => (darkColor ? '#35363a' : '#fff')};
  font-size: 1.1rem;
`

export const FormInput = styled.input`
  background-color: ${({ lightGray }) => (lightGray ? '#E5E5E5' : '#fff')};
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 1rem;
  outline-color: #f7d433;
`

export const FormTextArea = styled.textarea`
  width: 100%;
  min-height: 5rem;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 1rem;
  resize: vertical;
  outline-color: #f7d433;
`

export const FormBtn = styled.button`
  width: 100%;
  color: #35363a;
  background-color: #f7d433;
  padding: 10px;
  margin-top: 1.1rem;
  font-size: 1.125rem;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    letter-spacing: 1px;
    transition: all 0.2s ease-in-out;
  }
`
