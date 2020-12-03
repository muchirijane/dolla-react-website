import React from 'react'
import {
  Container,
  FormWrap,
  FormContent,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
  } from './SigninStyles'

const Signin = () => {
  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to='/'>dolla</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in into your account</FormH1>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput type='email' required></FormInput>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormInput type='password' required></FormInput>
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot your password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      
    </div>
  )
}

export default Signin
