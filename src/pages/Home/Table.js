import React from 'react'
import Styled from '@emotion/styled'

const Content = Styled.div`
    width:100%;
    min-height:100vh;
    height:100%;
    margin-top:50px;
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
    text-align:left;
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
`
const ButtonDelete = Styled.button`
    padding:10px 20px;
    border-radius:7px;
    background:#D90429;
     font-size: 14px;
  font-weight: 600;
    color:#faf9ff;
`
class Table extends React.Component {
  render() {
    return (
      <Content>
        <Tables>
          <thead>
            <Tr>
              <Th>No</Th>
              <Th>Name</Th>
              <Th>email</Th>
              <Th>barang</Th>
              <Th>price</Th>
              <Th>date</Th>
              <Th colSpan="2" style={{ textAlign: 'center' }}>
                action
              </Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>1</Td>
              <Td>ajin</Td>
              <Td>ajin@gmail.com</Td>
              <Td>sepatu</Td>
              <Td>Rp. 1.000.000</Td>
              <Td>12-12-2020</Td>
              <Td>
                <ButtonEdit>Edit</ButtonEdit>
              </Td>
              <Td>
                <ButtonDelete>Delete</ButtonDelete>
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>raga</Td>
              <Td>raga@gmail.com</Td>
              <Td>sepatu</Td>
              <Td>Rp. 10.000.000</Td>
              <Td>12-12-2020</Td>
              <Td>
                <ButtonEdit>Edit</ButtonEdit>
              </Td>
              <Td>
                <ButtonDelete>Delete</ButtonDelete>
              </Td>
            </Tr>
          </tbody>
        </Tables>
      </Content>
    )
  }
}

export default Table
