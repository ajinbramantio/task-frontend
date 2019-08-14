import React from 'react'
import styled from '@emotion/styled'
import FormLogin from './FormLogin'

export const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  align-items: center;
  flex-direction: column;
  background-color: '#FAF9FF';
`

class Login extends React.Component {
  render() {
    return (
      <LoginPageWrapper>
        <h1>Task Login</h1>
        <FormLogin />
      </LoginPageWrapper>
    )
  }
}

export default Login
