import React from 'react'
import styled from '@emotion/styled'
import FormLogin from './FormLogin'
import { Redirect } from 'react-router-dom'

export const LoginPageWrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    height: 100%;
    align-items: center;
    flex-direction: column;
    background-color: #faf9ff;
  }
  @media (max-width: 699px) {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    height: 100%;
    align-items: center;
    flex-direction: column;
    background-color: #faf9ff;
    font-size: 10px;
  }
`
const Title = styled.div`
  margin-left: 35px;
  text-align: center;
  @media (max-width: 699px) {
    font-size: 10px;
    margin-left: 5px;
  }
`

class Login extends React.Component {
  render() {
    // console.log(localStorage.AUTH_TOKEN ? 'benar' : 'salah')

    return (
      <LoginPageWrapper>
        {localStorage.AUTH_TOKEN ? <Redirect to="/" /> : null}
        <Title>
          <h1>Task Login</h1>
        </Title>
        <FormLogin />
      </LoginPageWrapper>
    )
  }
}

export default Login
