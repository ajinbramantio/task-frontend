import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Styled from '@emotion/styled'

const HomePage = Styled.div`
 display: flex;
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
  background-color: '#FAF9FF';
`

const HeaderHome = Styled.div`
  display:flex;
  margin-top:100px;
  width:100%;
`
const HeaderLeft = Styled.div`
  margin-left:5%;
  width:50%;
`
const HeaderRight = Styled.div`
  width:50%;
`
const RightDiv = Styled.div`
  width:80%;
  display:flex;
  justify-content:flex-end;
`
const AddTaskButton = Styled.button`
  padding:10px 20px;
  background-color:#2EC4B6;
  font-size: 16px;
  font-weight: 800;
  color:#faf9ff;
  border-radius:7px;
`
const UserName = Styled.span`
    margin-right:5%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
    color:#1D3557;
   
    
`
const LogoutButton = Styled.button`
  padding:10px 20px;
  background-color:#E71D36;
  font-size: 16px;
  font-weight: 800;
  color:#faf9ff;
  border-radius:7px;
`
const PopupStyled = Styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`
const PopupInner = Styled.div`
position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      showPopup: '',
      close: ''
    }
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
      close: 'close me'
    })
  }
  Popup() {
    this.setState({
      showPopup: '',
      close: 'close me'
    })
  }
  render() {
    return (
      <HomePage>
        {!localStorage.AUTH_TOKEN ? <Redirect to="/login" /> : ''}

        <HeaderHome>
          <HeaderLeft>
            <AddTaskButton onClick={this.togglePopup.bind(this)}>
              + Add Task
            </AddTaskButton>
          </HeaderLeft>
          <HeaderRight>
            <RightDiv>
              <UserName>username</UserName>
              <LogoutButton>Logout</LogoutButton>
            </RightDiv>
          </HeaderRight>
        </HeaderHome>
        {this.state.showPopup ? (
          <PopupStyled>
            <PopupInner>
              <h1>hihi</h1>
              <hr />

              {/* <h1>{this.props.text}</h1> */}
              <button
                onClick={e => {
                  e.preventDefault()
                  this.Popup()
                }}
                text="Close Me"

                // closePopup={this.togglePopup.bind(this)}
              >
                close
              </button>
            </PopupInner>
          </PopupStyled>
        ) : null}
      </HomePage>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)

  return {
    login: state.user
  }
}

export default connect(mapStateToProps)(Home)
