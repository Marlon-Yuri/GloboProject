import React from 'react'
import styled from 'styled-components'
import data from '../../../data/data.json'
import EuaImg from '../../../htdocs/assets/media/216x121-6.jpeg'
import {Link} from 'react-router-dom'

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

const BrasilItemText = styled.div`
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

export default function America() {
  return (
    <>
         <SectionItem>
             <img src={EuaImg} alt=''/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[2].data[0].label}</strong></LabelImage>
             <h2>{data.section[2].data[0].title}</h2>
             <p>{data.section[2].data[0].description}</p>
    
             </BrasilItemText>
             <Link to='/brasil'>Brasil</Link>
          </SectionItem>
    </>
  )
}
