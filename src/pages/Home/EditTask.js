import React from 'react'
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import Styled from '@emotion/styled'
import { Update_Task, Get_Task } from '../../modules/task/actions'

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

  @media (max-width: 589px) {
   width: 80%;
   left:10%;
  }

`
const ButtonX = Styled.button`
  position:absolute;
  padding:20px 30px;
  right:0;
  font-size: 18px;
  cursor:pointer;
   @media (max-width: 589px) {
    font-size: 1rem;
  }
`
const FormAdd = Styled.form`
    width: 80%;
    margin-inline-start: 5%;
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
  @media (max-width: 589px) {
   width: 40%;
   margin:5px;
  padding:10px;
  font-size:13px;
  }
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
  @media (max-width: 589px) {
   width: 40%;
   margin:5px;
   padding:10px;
   font-size:13px;
  }
`
class EditTask extends React.Component {
  constructor(props) {
    super()
    // console.log(props.data.name)

    this.state = {
      name: props.data.name,
      nameItems: props.data.nameItems,
      totalItem: props.data.totalItem,
      price: props.data.price,
      totalPrice: props.data.totalPrice,
      date: new Date(props.data.date)
    }
  }
  Popup(data, showPop) {
    if (showPop !== undefined) {
      const dataEditTask = {
        ...data,
        taskId: this.props.data._id,
        creatorId: this.props.data.creator._id,
        showPopup: this.props.showPopup
      }
      // console.log(dataEditTask)

      this.props.dispatch(Update_Task(dataEditTask)).then(() => {
        this.props.dispatch(Get_Task())
      })
    } else {
      const dataEditTask = {
        showPopup: !this.props.showPopup
      }
      this.props.dispatch(Update_Task(dataEditTask))
      // console.log('salah')
    }
  }

  render() {
    // console.log(this.props.data)

    return (
      <React.Fragment>
        <PopupStyled>
          <PopupInner>
            <ButtonX
              onClick={() => {
                this.Popup(this.state)
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
              <FormAdd
                onSubmit={e => {
                  e.preventDefault()
                  this.Popup(this.state, this.props.showPopup)
                }}
              >
                <FieldWrapper>
                  <label htmlFor="">Name :</label>
                  <InputText
                    type="text"
                    name=""
                    value={this.state.name}
                    onChange={e => {
                      this.setState({
                        name: e.target.value
                      })
                    }}
                  />
                </FieldWrapper>

                <FieldWrapper>
                  <label htmlFor="">Items :</label>
                  <InputText
                    type="text"
                    name=""
                    value={this.state.totalItem}
                    onChange={e => {
                      this.setState({
                        totalItem: e.target.value
                      })
                    }}
                  />
                </FieldWrapper>

                <FieldWrapper>
                  <label htmlFor="">Price :</label>
                  <InputText
                    type="text"
                    name=""
                    value={this.state.price}
                    onChange={e => {
                      this.setState({
                        price: e.target.value
                      })
                    }}
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Total Price :</label>
                  <InputText
                    type="text"
                    name=""
                    value={this.state.totalPrice}
                    onChange={e => {
                      this.setState({
                        totalPrice: e.target.value
                      })
                    }}
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Date :</label>
                  <InputDate
                    type="date"
                    dateFormat="dd/MM/yyyy"
                    selected={this.state.date}
                    onChange={date => {
                      this.setState({
                        date: date
                      })
                    }}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </FieldWrapper>

                <UpdateButton>Update</UpdateButton>
                <CancelButton
                  onClick={() => {
                    this.Popup(this.state)
                  }}
                  text="Close Me"

                  // closePopup={this.togglePopup.bind(this)}
                >
                  close
                </CancelButton>
              </FormAdd>
            </div>
          </PopupInner>
        </PopupStyled>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  // console.log(state.task.editData)

  return {
    data: state.task.editData,
    showPopup: state.task.showPopupEdit
  }
}

export default connect(mapStateToProps)(EditTask)
