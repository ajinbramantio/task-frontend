import React from 'react'
import styled from '@emotion/styled'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'

export const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  align-items: center;
  flex-direction: column;
  background-color: '#FAF9FF';
`
const FormStyled = styled(Form)`
  width: 30%;
  margin: 20px;
`
const FieldStyled = styled(Field)`
  padding: 20px;
  display: block;
  border-radius: 5px;
  border: 1px solid #eee;
  width: 100%;
  margin: 1em 0;
  box-sizing: border-box;

  &::placeholder {
    font-style: italic;
    font-size: 15px;
    color: #2f2f2f;
    font-weight: 600;
  }
`
const ButtonStyled = styled.button`
  padding: 20px;
  display: block;
  border-radius: 5px;
  border: 1px solid #eee;
  width: 100%;
  margin: 1em 0;
  box-sizing: border-box;
  background-color: #00edcd;
  font-size: 18px;
  font-weight: 800;
  color: #faf9ff;
`
const ButtonRegister = styled.button`
  background-color: #d81e5b;
  border: 1px solid #eee;
  border-radius: 5px;
  width: 100%;
  padding: 20px;
  font-size: 18px;
  font-weight: 800;
  color: #faf9ff;
`

class Login extends React.Component {
  render() {
    return (
      <LoginPageWrapper>
        <h1>Task Login</h1>
        <Formik>
          <FormStyled>
            <FieldStyled type="email" name="email" placeholder="email" />
            <FieldStyled
              type="password"
              name="password"
              placeholder="password"
            />
            <ButtonStyled>Login</ButtonStyled>
            <p style={{ textAlign: 'center' }}>
              Does not have an account yet?{' '}
            </p>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <ButtonRegister> Register</ButtonRegister>
            </Link>
          </FormStyled>
        </Formik>
      </LoginPageWrapper>
    )
  }
}

export default Login
