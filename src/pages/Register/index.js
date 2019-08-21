import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { RegisterUser } from '../../modules/register/actions'

export const RegisterPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  align-items: center;
  flex-direction: column;
  background-color: '#FAF9FF';
`
const FormStyled = styled.form`
  width: 30%;
  margin: 20px;
`
const FieldStyled = styled.input`
  padding: 20px;
  display: block;
  border-radius: 5px;
  border: 1px solid #eee;
  width: 100%;
  margin: 1em 0;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    font-style: italic;
    font-size: 15px;
    color: #2f2f2f;
  }
`

const ButtonRegister = styled.button`
  margin-top: 50px;
  background-color: #d81e5b;
  border: 1px solid #eee;
  border-radius: 5px;
  width: 100%;
  padding: 20px;
  font-size: 18px;
  font-weight: 800;
  color: #faf9ff;
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

  &::placeholder {
    font-style: italic;
  }
`

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      email: '',
      password: '',
      message: ''
    }
  }
  Submit(e) {
    e.preventDefault()
    this.props.RegisterUser(this.state)
  }
  render() {
    return (
      <RegisterPageWrapper>
        {localStorage.AUTH_TOKEN ? <Redirect to="/" /> : null}
        {this.props.data.hasError ? <h1>{this.props.data.message}</h1> : ''}
        <h1>Task Register</h1>
        <FormStyled
          onSubmit={event => {
            this.Submit(event)
          }}
        >
          <FieldStyled
            type="text"
            name="userName"
            maxLength="32"
            value={this.state.userName}
            onChange={event => {
              const { value, maxLength } = event.target
              console.log(value.length)

              if (value.length >= 32) {
                this.setState({
                  userName: event.target.value,
                  message: 'max Length ' + maxLength
                })
              }

              this.setState({
                userName: event.target.value
              })
            }}
            placeholder="please input youre user name"
          />

          {!this.state.message ? '' : <p>{this.state.message}</p>}
          <FieldStyled
            type="text"
            name="email"
            value={this.state.email}
            onChange={event => {
              this.setState({
                email: event.target.value
              })
            }}
            placeholder="please input youre email"
          />
          <FieldStyled
            type="password"
            name="password"
            value={this.state.password}
            onChange={event => {
              this.setState({
                password: event.target.value
              })
            }}
            placeholder="please input youre password"
          />

          <ButtonRegister> Register</ButtonRegister>

          <p style={{ textAlign: 'center' }}>
            Already account? <span>please Login</span>{' '}
          </p>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <ButtonStyled>Login</ButtonStyled>
          </Link>
        </FormStyled>
      </RegisterPageWrapper>
    )
  }
}

const mapStateToProps = state => ({
  message: state.register.message,
  data: state.register
})

const mapDispatchToProps = {
  RegisterUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
