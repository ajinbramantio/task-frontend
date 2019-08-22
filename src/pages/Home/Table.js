import React from 'react'
import Styled from '@emotion/styled'
import { connect } from 'react-redux'
import { Edit_Task, Get_Task } from '../../modules/task/actions'
import TASKEDIT from './EditTask'

const Content = Styled.div`
    width:60%;
    min-height:100vh;
    height:100%;
    margin-top:50px;
    margin-left:20%;
    overflow-x: scroll;
`
// display: flex;
// justify - content: center;
// min - height: 100vh;
// height: 100 %;
// align - items: center;
// flex - direction: column;
// background - color: #faf9ff;
const Tables = Styled.table`
   display: -webkit-box;
   justify-content:center;
   align-items:center;
   border-collapse: collapse;
   width:max-content;
   
   
   /* flex-direction:column; */
`
const Tr = Styled.tr`
    border-bottom: 1px solid black;
`
const Th = Styled.th`
    padding:20px;
    text-align:left;
    background-color: #6c7ae0;
    color: #EDF2F4;
`
const Td = Styled.th`
    padding:20px;
    text-align:center;
    color:#8D99AE;
    color: #2B2D42;
`
const ButtonEdit = Styled.button`
    padding:10px 20px;
    border-radius:7px;
    background:#FF9F1C;
     font-size: 14px;
    font-weight: 600;
    color:#faf9ff;
    cursor:pointer;
`
const ButtonDelete = Styled.button`
    padding:10px 20px;
    border-radius:7px;
    background:#D90429;
    font-size: 14px;
    font-weight: 600;
    color:#faf9ff;
    cursor:pointer;
`
class Table extends React.Component {
  tooglePopupEdit(id) {
    // console.log(id)
    if (this.props.showPopup === false) {
      const dataTaskEdit = {
        showPopup: !this.props.showPopup
      }
      this.props.dispatch(Edit_Task(dataTaskEdit))
    }
  }
  componentDidMount() {
    this.props.dispatch(Get_Task())
  }
  render() {
    // console.log(this.props.data)

    return (
      <Content>
        <Tables>
          <thead>
            <Tr>
              <Th>No</Th>
              <Th>Name</Th>
              <Th>Items</Th>
              <Th>Total items</Th>
              <Th>Price</Th>
              <Th>Total Price</Th>
              <Th>Date</Th>
              <Th colSpan="2" style={{ textAlign: 'center' }}>
                action
              </Th>
            </Tr>
          </thead>
          <tbody>
            {this.props.dataCustomers.map((customer, index) => {
              let Y = new Date(customer.date).getFullYear()
              let M = new Date(customer.date).getMonth()
              let D = new Date(customer.date).getDate()
              console.log(D + '-' + M)

              return (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{customer.name}</Td>
                  <Td>{customer.nameItems}</Td>
                  <Td>{customer.totalItem}</Td>
                  <Td>{customer.price}</Td>
                  <Td>{customer.totalPrice}</Td>
                  <Td>{`${D}-${M + 1}-${Y}`}</Td>
                  <Td>
                    <ButtonEdit
                      onClick={() => {
                        this.tooglePopupEdit(customer._id)
                      }}
                    >
                      Edit
                    </ButtonEdit>
                  </Td>
                  <Td>
                    <ButtonDelete>Delete</ButtonDelete>
                  </Td>
                </Tr>
              )
            })}
          </tbody>
        </Tables>
        {/* {console.log(this.props.showPopup)} */}
        {this.props.showPopup ? <TASKEDIT /> : null}
      </Content>
    )
  }
}

const maStateToProps = state => {
  // console.log(state.task)

  return {
    showPopup: state.task.showPopupEdit,
    dataCustomers: state.task.data
  }
}
export default connect(maStateToProps)(Table)
