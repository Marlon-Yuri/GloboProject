import {Link} from 'react-router-dom'
import styled from "styled-components"

export const Container = styled.main`
width: 100%;
background-color: #E0EEEE;
`
export const Cards = styled.section`
width: 100%;
height: 120vh;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
height: 470vh;
    
}
`

export const Title = styled.div`
border-bottom: solid #FFD700;
width: 17%;
font-size: 20px;
display: flex;
justify-content: center;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 50vw;
 h1{
   font-weight: bolder;
   color:#064960
 }
} 
`

export const SectionItem = styled.div`
width:22vw;
height: 52vh;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
:hover{
   border-top: solid 1px;
   border-bottom: solid 1px;
}
img{
  width: 20.6vw;
  object-fit: contain;
  transition: all 0.5s ease-in-out;
  :hover{
    cursor: pointer;
    transform: scale(1.02);
  
  }
@media only screen and (min-width: 360px) and (max-width: 800px) {
 
width: 80vw; 
 
} 
  }

@media only screen and (min-width: 360px) and (max-width: 800px) {
 
width: 90vw;
border-bottom:solid 1px ;
}  
`

export const BrasilItemText = styled.div`
display: flex;
height: 19vh;
width: 20.7vw;
flex-direction: column;
justify-content: space-evenly;
p{
  font-size: 1.2vw;
  
}
h2{
font-size: 1.4vw;
line-height:21px;
font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";;
}
@media only screen and (min-width: 360px) and (max-width: 800px) {
 
width: 70vw;
display: flex;
height: 20vh;
justify-content: space-evenly;
align-items: center;
h2{
   font-size: 5.4vw;
}
p{
   font-size: 3.8vw;
}
 
} 
`

export const LabelImage = styled.label`
color: #064960;
text-transform: uppercase;
font-size: 0.8vw;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 font-size: 4vw;
} 
`

export const SLink = styled(Link)`
text-decoration: none;
width: 10vw;
height: 4vh;
display: flex;
justify-content: center;
align-items: center;
background: black;
font-size: 1.1vw;
font-weight: bolder;
color: #fff;
border: 1px solid #eee;
border-radius: 20px;
box-shadow: 5px 5px 5px #eee;
text-shadow: none;
transition: 1s;
:hover{
background: #FFD700;
color: black;
border: 1px solid #eee;
border-radius: 20px;
box-shadow: 5px 5px 5px #eee;
text-shadow: none;
}
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 50vw;
 height: 6vh;
 font-size: 4.5vw;
 background-color: #FFD700;
 margin-bottom: 1.5%;
} 
`
