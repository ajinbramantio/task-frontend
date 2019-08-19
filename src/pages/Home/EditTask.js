import React from 'react'
import { connect } from 'react-redux'
import Styled from '@emotion/styled'
import { Edit_Task } from '../../modules/task/actions'

const PopupStyled = Styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow:auto;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`
const PopupInner = Styled.div`
  position: absolute;
  width:40%;
  left: 25%;
  right: 25%;
  top: 15%;
  bottom: 60%;
  margin: auto;
  background: white;

`
const ButtonX = Styled.button`
  position:absolute;
  padding:20px 30px;
  right:0;
  font-size: 18px;
  cursor:pointer;
`
const FieldWrapper = Styled.div`
  margin-bottom: 10px;
`
const InputText = Styled.input`
  margin-top: 10px;
  display: block;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
`
const UpdateButton = Styled.button`
  margin:20px 20px 20px 0px;
  padding:10px 20px;
  background-color:#2EC4B6;
  font-size: 16px;
  font-weight: 800;
  color:#faf9ff;
  border-radius:7px;
  cursor:pointer;
  outline:none;
`
const CancelButton = Styled.button`
  margin:20px 20px 20px 0px;
  padding:10px 20px;
  background-color:#E71D36;
  font-size: 16px;
  font-weight: 800;
  color:#faf9ff;
  border-radius:7px;
  cursor:pointer;
  outline:none;
`
class EditTask extends React.Component {
  Popup() {
    // console.log(this.props.showPopup)
    if (this.props.showPopup === true) {
      const dataEditTask = {
        showPopup: !this.props.showPopup
      }
      // console.log(dataEditTask)

      this.props.dispatch(Edit_Task(dataEditTask))
    }
  }

  render() {
    // console.log(this.props)

    return (
      <React.Fragment>
        <PopupStyled>
          <PopupInner>
            <ButtonX
              onClick={() => {
                this.Popup()
              }}
            >
              X
            </ButtonX>
            <div
              style={{
                padding: '1px 24px',
                borderBottom: '1px solid #e8e8e8'
              }}
            >
              <h3>Edit Task</h3>
            </div>

            <div style={{ padding: '24px', backgroundColor: 'white' }}>
              <form style={{ width: '95%' }}>
                <FieldWrapper>
                  <label htmlFor="">Name :</label>
                  <InputText type="text" name="" placeholder="input Name" />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Email :</label>
                  <InputText type="text" name="" placeholder="input Email" />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Items :</label>
                  <InputText type="text" name="" placeholder="input Items" />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Price :</label>
                  <InputText type="text" name="" placeholder="input Price" />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Date :</label>
                  <InputText type="datetime" name="" placeholder="date" />
                </FieldWrapper>

                <UpdateButton>Update</UpdateButton>
                <CancelButton
                  onClick={() => {
                    this.Popup()
                  }}
                  text="Close Me"

                  // closePopup={this.togglePopup.bind(this)}
                >
                  close
                </CancelButton>
              </form>
            </div>
          </PopupInner>
        </PopupStyled>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  // console.log(state)

  return {
    data: state.task.data,
    showPopup: state.task.showPopupEdit
  }
}

export default connect(mapStateToProps)(EditTask)
