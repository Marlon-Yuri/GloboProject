import React from 'react'
import styled from 'styled-components'
import data from '../../../data/data.json'
import {Link} from 'react-router-dom'
import InterImg from '../../../htdocs/assets/media/216x121-7.jpeg'

const SectionItem = styled.div`
 
width:22vw;
height: 50vh;
display: flex;
align-items: center;
flex-direction: column;
img{
  width: 20.6vw;
  object-fit: contain;
  transition: all 0.5s ease-in-out;
  :hover{
    cursor: pointer;
    transform: scale(1.02)
  }
  }
`

const MundoItemText = styled.div`
display: flex;
height: 19vh;
width: 20.7vw;
flex-direction: column;
justify-content: space-evenly;
p{
  font-size: 20px;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";;
 
}
h1{
font-size:26px;
line-height:21px;
font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";;
}
`

const LabelImage = styled.label`
color: #064960;
text-transform: uppercase;
font-size: 14px;
`




export default function index() {
  return (
    <div>
         <SectionItem>
          <img src={InterImg} alt='Prédios'/>
             <MundoItemText>
             
             <LabelImage><strong>{data.section[2].data[2].label}</strong></LabelImage>
             <h2>{data.section[2].data[2].title}</h2>
             <p>{data.section[2].data[2].description}</p>
    
             </MundoItemText>
             <Link to='/mundo'>Mundo +</Link>
          </SectionItem>
    </div>
  )
}
