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
  background-color: #faf9ff;
`
const FormStyled = styled.form`
  width: 30%;
  margin: 20px;
  @media (max-width: 699px) {
    width: 80%;
  }
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
  @media (max-width: 699px) {
    &::placeholder {
      font-style: italic;
      font-size: 0.5rem;
      color: #2f2f2f;
    }
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
    // console.log(this.props.message !== '' && this.props.data.length === 0)

    return (
      <RegisterPageWrapper>
        <h1>Task Register</h1>
        {localStorage.AUTH_TOKEN ? <Redirect to="/" /> : null}
        {this.props.message !== '' && this.props.data.length === 0 ? (
          <p
            style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#EF233C',
              textAlign: 'center'
            }}
          >
            {this.props.message}
          </p>
        ) : this.props.data.length !== 0 ? (
          <p
            style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#20BF55',
              textAlign: 'center'
            }}
          >
            {this.props.message}
          </p>
        ) : null}

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
              // console.log(value.length)

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
            required
          />

          {!this.state.message ? '' : <p>{this.state.message}</p>}
          <FieldStyled
            type="email"
            name="email"
            value={this.state.email}
            onChange={event => {
              this.setState({
                email: event.target.value
              })
            }}
            placeholder="please input youre email"
            required
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
            required
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
  data: state.register.data
})

const mapDispatchToProps = {
  RegisterUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
