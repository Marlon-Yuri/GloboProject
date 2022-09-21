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
@media (max-width: 375px) {

}
`
const SquareBox= styled.div`
display: flex;
height: 10vh;
flex-direction: column;
justify-content: space-evenly;
margin-left:0.5%;
margin-top:1%;
@media (max-width: 375px) {
    height: 5vh;
}
 div{
  width: 1.1vw;
  height: 2.2vh;
  background-color: #FFFF00;
  @media (max-width: 375px) {
    width: 2vw;
    height: 1.2vh;
    display: flex;
}
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
    font-size:5.3vw;
    @media (max-width: 375px) {
    font-size: 9vw;
}
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
