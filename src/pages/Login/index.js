import React from 'react'
import styled from '@emotion/styled'
import FormLogin from './FormLogin'
import { Redirect } from 'react-router-dom'

export const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  align-items: center;
  flex-direction: column;
  background-color: #faf9ff;
`

class Login extends React.Component {
  render() {
    // console.log(localStorage.AUTH_TOKEN ? 'benar' : 'salah')

    return (
      <LoginPageWrapper>
        {localStorage.AUTH_TOKEN ? <Redirect to="/" /> : null}
        <h1>Task Login</h1>
        <FormLogin />
      </LoginPageWrapper>
    )
  }
}

export default Login
