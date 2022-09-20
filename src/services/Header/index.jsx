import React from 'react'
import styled from 'styled-components'
import FonteGlobo from '../../fonts/rede-globo-bold.ttf'
const Container = styled.section`
width: 100%;
height: 15vh;
display: flex;
justify-content: center;
align-items: center;
background-color:#064960;
@font-face {
    font-family: 'Rede-Globo' ;
    src: url(${FonteGlobo}) format('ttf');
  }
  h1{
    font-family: 'Rede-Globo';
    color: white;
    font-size:75px
  }
 
`
const SquareBox= styled.div`
display: flex;
height: 10vh;
flex-direction: column;
justify-content: space-evenly;
margin-left:0.5%;
margin-top:0.3%;
 div{
  width: 1.1vw;
  height: 2.2vh;
  background-color: #FFFF00;
 }
`
export default function Header() {
  return (
    <Container>
        <h1>INFOGLOBO</h1>
        <SquareBox>
          <div></div>
          <div></div>
        </SquareBox>
    </Container>
  )
}
