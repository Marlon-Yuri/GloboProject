import React from 'react'
import styled from 'styled-components'
import FonteGlobo from '../../../fonts/rede-globo-bold.ttf'
const Footer = styled.footer`
width: 100%;
height: 13vh;
background-color: yellow;
display: flex;
justify-content: center;
margin-top:1.4%;
@font-face {
    font-family: 'Rede-Globo' ;
    src: url(${FonteGlobo}) format('ttf');
  }
  h1{
    font-family: 'Rede-Globo';
    color:#064960;
    font-size:37px
  }
 
`
const SquareBox = styled.div`
display: flex;
height: 4vh;
flex-direction: column;
justify-content: space-evenly;
margin-left:0.5%;
margin-top:0.6%;
 div{
  width: 0.6vw;
  height: 1.2vh;
  background-color: white;
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
`
const BoxLogo = styled.div`
display: flex;
align-items: center;
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
          <p>copyright © 2017</p>
          <p>todos os direitos reservados</p>
       </CopyRight>
      </Container>
    </Footer>
  )
}
