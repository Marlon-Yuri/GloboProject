import React from 'react'
import Menu from './Menu/menu'
import styled from 'styled-components'

const Container = styled.section`
width: 100%;
height: 15vh;
display: flex;
align-items: center;
justify-content:center ;
background-color:#064960;

`
const SquareBox= styled.div`
display: flex;
height: 10vh;
flex-direction: column;
justify-content: space-evenly;
margin-left:0.5%;
margin-top:1%;
 div{
  width: 1.1vw;
  height: 2.2vh;
  background-color: #FFFF00;
 }
`
 
const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
 
width: 35vw;
height: 10vh;
position: relative;
right: 6.8%;
h1{
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size:5.3vw
  }
`


export default function Header() {
  return (
    <Container>
       <Menu/>
       <Title>
         <h1>INFOGLOBO</h1>
        <SquareBox>
          <div></div>
          <div></div>
        </SquareBox>
       </Title>
       
    </Container>
  )
}
