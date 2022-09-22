import React from 'react'
import SeaImg from '../../../htdocs/assets/media/216x121-10.jpeg'
import data from '../../../data/data.json'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Container = styled(Link)`
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    background-color: #FFE1FF;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  } 
`


const SectionItem = styled.div`
width:100vw;
height: 80vh;
display: flex;
align-items: center;
justify-content:space-evenly ;
background-color: #FFFAF0;
img{
  width: 50vw;
  object-fit: contain;
  transition: all 0.5s ease-in-out;
  :hover{
    cursor: pointer;
    transform: scale(1.02)
  }
  @media only screen and (min-width: 360px) and (max-width: 800px) {
   width: 75vw;
     
  } 
  }

  @media only screen and (min-width: 360px) and (max-width: 800px) {
 
    display: flex;
    flex-direction: column;
     
  } 
`

const TurismoItemText = styled.div`
display: flex;
height: 50vh;
width: 38vw;
flex-direction: column;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
  width: 70vw;
  height: 30vh;
 
  } 
p{
  font-size: 2.1vw;
  font-family: 'Rubik', sans-serif;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
 
    font-size: 4vw;
  } 
}
h2{
font-size: 2.5vw;
line-height:40px;
font-family: 'Rubik', sans-serif;
@media only screen and (min-width: 360px) and (max-width: 800px) {
    
    width: 60vw;
    height: 19vh;
    font-size: 3vw;
  
  } 
}
`

const LabelImage = styled.label`
color: #064960;
text-transform: uppercase;
font-size: 14px;
font-family: 'Rubik', sans-serif;
@media only screen and (min-width: 360px) and (max-width: 800px) {
     font-size: 5vw;
    display:flex;
    justify-content: center;
  } 
`

const SLink = styled(Link)`
font-size: 1.7vw;
font-family: 'Rubik', sans-serif;
@media only screen and (min-width: 360px) and (max-width: 800px) {
     font-size: 5vw;
     
  } 
`

export default function Turismo() {
  return (
    <Container>
       <SectionItem>
             <img src={SeaImg} alt=''/>
             <TurismoItemText>
             
             <LabelImage><strong>{data.section[2].data[1].label}</strong></LabelImage>
             <h2>{data.section[2].data[1].title}</h2>
             <p>{data.section[2].data[1].description}</p>
    
             </TurismoItemText>
             <SLink to='/brasil'>Brasil</SLink>
          </SectionItem>  
    </Container>
  )
}
