import React from 'react'
import { connect } from 'react-redux'
import Styled from '@emotion/styled'

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
class AddTask extends React.Component {
  constructor() {
    // console.log(props)

    super()
    this.state = {
      showPopup: false,
      close: ''
    }
  }

  Popup() {
    // console.log('aaa')
    // this.props.AddTaskPopup

    this.setState({
      showPopup: '',
      close: 'close me'
    })
    // console.log(this.state)
  }

  render() {
    console.log(this.props)

    return (
      <React.Fragment>
        <PopupStyled>
          <PopupInner>
            <h2>Create Task</h2>
            <hr />
            <div>
              <form>
                <div>
                  <label htmlFor="">Name</label>
                  <input type="text" name="" id="" />
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <input type="text" name="" id="" />
                </div>
                <div>
                  <label htmlFor="">Items</label>
                  <input type="text" name="" id="" />
                </div>
                <div>
                  <label htmlFor="">Price</label>
                  <input type="text" name="" id="" />
                </div>
                <div>
                  <label htmlFor="">Date</label>
                  <input type="datetime" name="" id="" />
                </div>

                <button>Create</button>
                <button
                  onClick={() => {
                    this.Popup()
                  }}
                  text="Close Me"

                  // closePopup={this.togglePopup.bind(this)}
                >
                  close
                </button>
              </form>
            </div>
          </PopupInner>
        </PopupStyled>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  // console.log(state.task)

  return {
    data: state.task.data,
    showPopup: state.task.showPopupAdd
  }
}

export default connect(mapStateToProps)(AddTask)
