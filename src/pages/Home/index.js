import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Styled from '@emotion/styled'
import AddTask from './AddTask'

import Table from './Table'

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
  
  width:50%;
`
const HeaderRight = Styled.div`
  width:50%;
`
const RightDiv = Styled.div`
  width:100%;
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

class Home extends React.Component {
  constructor(props) {
    super()
    this.state = {
      showPopup: props.showPopup,
      close: ''
    }
  }
  togglePopup() {
    console.log(!this.state.showPopup)

    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render() {
    console.log(this.props)

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
          <AddTask showPopup={this.props.showPopup} />
        ) : null}
        <Table />
      </HomePage>
    )
  }
}

const mapStateToProps = state => {
  //   console.log(state.task.showPopupAdd)

  return {
    login: state.user,
    showPopup: state.task.showPopupAdd
  }
}

export default connect(mapStateToProps)(Home)
