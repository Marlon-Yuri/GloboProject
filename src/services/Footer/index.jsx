import React from 'react'
import styled from 'styled-components'
const Footer = styled.footer`
width: 100%;
height: 10vh;
display: flex;
justify-content: center;
margin-top:1.4%;
background-color: #EEEE00;
  h1{
    font-family: 'Poppins', sans-serif;
    color:#064960;
    font-size:37px
  }
  @media only screen and (min-width: 360px) and (max-width: 800px) {
 
    width: 100%;
    height: 31vh; 
    background-image: linear-gradient(to bottom, #EEEE00 0, #EEEE00 50%, #064960 50%);
 
}
`
const SquareBox = styled.div`
display: flex;
height: 4vh;
flex-direction: column;
justify-content: space-evenly;
margin-left:0.6%;
margin-top:1%;
@media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 7vw;
    height: 8vh;
}
 div{
  width: 0.6vw;
  height: 1.2vh;
  background-color: white;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    width:1.9vw;
    height: 1.4vh;
    margin-left: 30%;
}
 }
`

const CopyRight = styled.div`
width: 19vw;
height: 10vh;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
p{
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 12.3px;
}
@media only screen and (min-width: 360px) and (max-width: 800px) {
   
   position: relative;
   top: 23%;
   right: 10%;
   
   p{
    color: white;
    font-weight: lighter;
   }
   div{
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
   }
}
`
const BoxLogo = styled.div`
display: flex;
align-items: center;
@media only screen and (min-width: 360px) and (max-width: 800px) {
    
     
    position: relative;
    bottom: 20%;
    left: 18%;
    
}
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90vw;
 
`
export default function FooterComponent() {
  return (
    <Footer>
      <Container>
        <BoxLogo>
        <h1>INFOGLOBO</h1>
        <SquareBox>
          <div></div>
          <div></div>
        </SquareBox>
        </BoxLogo>
     
       <CopyRight>
         <div>
          <p>copyright © 2017</p>
          <p>todos os direitos reservados</p>
         </div>
          
       </CopyRight>
      </Container>
    </Footer>
  )
}
