import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { userLogin } from '../../modules/user/actions'

const FormLoginStyled = styled.div`
  width: 35%;
`

const FormStyled = styled.form`
  width: 100%;
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
class FormLogin extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  submit() {
    console.log(this.state)

    this.setState({
      email: this.state.email,
      password: this.state.password
    })
    this.props.userLogin(this.state)
  }

  render() {
    // console.log(this.props.user.isAuthorized)

    return this.props.user.isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <FormLoginStyled>
        <FormStyled
          onSubmit={event => {
            event.preventDefault()
            this.submit()
          }}
        >
          <FieldStyled
            type="email"
            name="email"
            value={this.state.email}
            onChange={event => {
              this.setState({
                email: event.target.value
              })
            }}
            placeholder="email"
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
            placeholder="password"
          />
          <ButtonStyled>Login</ButtonStyled>
          <p style={{ textAlign: 'center' }}>Does not have an account yet? </p>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <ButtonRegister> Register</ButtonRegister>
          </Link>
        </FormStyled>
      </FormLoginStyled>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = {
  userLogin
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormLogin)
