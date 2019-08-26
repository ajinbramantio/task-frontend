import React from 'react'
import { connect } from 'react-redux'
import Styled from '@emotion/styled'
import { Add_Task, Get_Task } from '../../modules/task/actions'
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
    margin-inline-start: 8%;
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
  @media (max-width: 589px) {
   width: 40%;
   margin:5px;
   padding:10px;
   font-size:13px;
  }
  
`
class AddTask extends React.Component {
  constructor(props) {
    super(props)

    // const chooseDate = `${new Date.getDate()}/${new Date.getMonth()}, ${new Date.getFullYear()}`
    this.state = {
      name: '',
      nameItems: '',
      totalItem: 0,
      price: 0,
      totalPrice: 0,
      date: new Date(),
      showPopup: props.showPopup
    }
    this.handleChange = this.handleChange.bind(this)
  }

  Popup(show) {
    // console.log(show)

    if (show === true) {
      const newData = this.state
      const dataAddTask = {
        ...newData,
        showPopup: this.props.showPopup
      }
      this.props.dispatch(Add_Task(dataAddTask)).then(() => {
        this.props.dispatch(Get_Task())
      })
    } else {
      this.props.dispatch(Add_Task(show))
    }
  }
  handleChange(date) {
    // console.log(date)
    // console.log(date)

    this.setState({
      date: date
    })
  }

  render() {
    const totalPrice = new Intl.NumberFormat('IND', {
      style: 'currency',
      currency: 'IDR',
      maximumSignificantDigits: 3
    }).format(this.state.totalPrice)
    return (
      <React.Fragment>
        <PopupStyled>
          <PopupInner>
            <ButtonX
              onClick={() => {
                let show = {
                  showPopup: !this.props.showPopup
                }
                this.Popup(show)
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
              <FormAdd
                onSubmit={event => {
                  event.preventDefault()
                  this.Popup(this.props.showPopup)
                }}
              >
                <FieldWrapper>
                  <label htmlFor="">Name :</label>
                  <InputText
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={event => {
                      this.setState({
                        name: event.target.value
                      })
                    }}
                    placeholder="input Name"
                    //required
                  />
                </FieldWrapper>

                <FieldWrapper>
                  <label htmlFor="">Name Items :</label>
                  <InputText
                    type="text"
                    name=""
                    placeholder="input Items"
                    value={this.state.NameItems}
                    onChange={event => {
                      this.setState({
                        nameItems: event.target.value
                      })
                    }}
                    //required
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Total Items :</label>
                  <InputText
                    type="number"
                    name=""
                    placeholder="input Name Items"
                    value={this.state.totalItem}
                    onChange={event => {
                      this.setState({
                        totalItem: event.target.value
                      })
                    }}
                    //required
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Price :</label>
                  <InputText
                    type="number"
                    name=""
                    placeholder="input Price"
                    value={this.state.price}
                    onChange={event => {
                      this.setState({
                        price: event.target.value,
                        totalPrice: event.target.value * this.state.totalItem
                      })
                    }}
                    //required
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Total Price :</label>
                  <InputText
                    type="text"
                    name=""
                    placeholder="input Price"
                    value={totalPrice}
                    readOnly
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <label htmlFor="">Date :</label>

                  <InputDate
                    type="date"
                    dateFormat="dd/MM/yyyy"
                    selected={this.state.date}
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
              </FormAdd>
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
    showPopup: state.task.showPopupAdd,
    message: state.task.message
  }
}

export default connect(mapStateToProps)(AddTask)
