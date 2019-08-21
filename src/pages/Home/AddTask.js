import React from 'react'
import { connect } from 'react-redux'
import Styled from '@emotion/styled'
import { Add_Task } from '../../modules/task/actions'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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

const InputDate = Styled(DatePicker)`
 
  display: block;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
`
const CreateButton = Styled.button`
  margin:20px 20px 20px 0px;
  padding:10px 20px;
  background-color:#2EC4B6;
  font-size: 16px;
  font-weight: 800;
  color:#faf9ff;
  border-radius:7px;
  cursot:pointer;
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
  
`
class AddTask extends React.Component {
  constructor(props) {
    super(props)

    // const chooseDate = `${new Date.getDate()}/${new Date.getMonth()}, ${new Date.getFullYear()}`
    this.state = {
      startDate: new Date()
    }
    this.handleChange = this.handleChange.bind(this)
  }

  Popup() {
    // console.log(this.props.showPopup)
    if (this.props.showPopup === true) {
      const dataAddTask = {
        showPopup: !this.props.showPopup
      }
      this.props.dispatch(Add_Task(dataAddTask))
    }
  }
  handleChange(date) {
    // console.log(date)
    // console.log(date)

    this.setState({
      startDate: date
    })
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
              <h3>Create Task</h3>
            </div>

            <div style={{ padding: '24px', backgroundColor: 'white' }}>
              <form style={{ width: '95%' }}>
                <FieldWrapper>
                  <label htmlFor="">Name :</label>
                  <InputText
                    type="text"
                    name=""
                    placeholder="input Name"
                    required
                  />
                </FieldWrapper>

                <FieldWrapper>
                  <label htmlFor="">Items :</label>
                  <InputText
                    type="text"
                    name=""
                    placeholder="input Items"
                    required
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Total Items :</label>
                  <InputText
                    type="text"
                    name=""
                    placeholder="input Items"
                    required
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Price :</label>
                  <InputText
                    type="text"
                    name=""
                    placeholder="input Price"
                    required
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Total Price :</label>
                  <InputText
                    type="text"
                    name=""
                    placeholder="input Price"
                    required
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Date :</label>

                  <InputDate
                    type="date"
                    dateFormat="dd/MM/yyyy"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </FieldWrapper>

                <CreateButton>Create</CreateButton>
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
    showPopup: state.task.showPopupAdd
  }
}

export default connect(mapStateToProps)(AddTask)