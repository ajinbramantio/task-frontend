import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Styled from '@emotion/styled'
import AddTask from './AddTask'
import { Add_Task } from '../../modules/task/actions'
import { LogoutUser, GetUser } from '../../modules/user/actions'

import Table from './Table'

const HomePage = Styled.div`
 display: flex;
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
  background-color: #FAF9FF;
`

const HeaderHome = Styled.div`
  display:flex;
  margin-top:100px;
  margin-left: 25%;
  width:50%;
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
  cursor:pointer;
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
  cursor:pointer;
`

class Home extends React.Component {
  togglePopup() {
    // console.log(this.props.showPopup)
    if (this.props.showPopup === false) {
      const dataAddTask = {
        showPopup: !this.props.showPopup
      }
      this.props.dispatch(Add_Task(dataAddTask))
    }
  }
  componentDidMount() {
    this.props.dispatch(GetUser())
  }

  render() {
    // console.log(!this.props.user.token, !localStorage.AUTH_TOKEN)

    return (
      <HomePage>
        {!localStorage.AUTH_TOKEN ? <Redirect to="/login" /> : ''}
        {/* {!this.props.user.token ? <Redirect to="/login"/> : ''} */}
        <HeaderHome>
          <HeaderLeft>
            <AddTaskButton onClick={this.togglePopup.bind(this)}>
              + Add Task
            </AddTaskButton>
          </HeaderLeft>
          <HeaderRight>
            <RightDiv>
              <UserName>{this.props.user.userName}</UserName>
              <LogoutButton
                onClick={async () => {
                  // console.log(this.props.history.push('/login'))

                  await this.props.dispatch(LogoutUser())
                  this.props.history.push('/login')
                }}
              >
                Logout
              </LogoutButton>
            </RightDiv>
          </HeaderRight>
        </HeaderHome>
        {/* {console.log(this.props.showPopup)} */}
        {this.props.showPopup ? <AddTask /> : null}
        <Table />
      </HomePage>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)

  return {
    user: state.user.data,
    showPopup: state.task.showPopupAdd
  }
}

export default connect(mapStateToProps)(Home)
