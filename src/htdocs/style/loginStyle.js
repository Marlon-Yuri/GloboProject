
import styled from 'styled-components'
import TopoMkt from '../assets/media/topoLogin.gif'



export const Container = styled.section`
width: 100%;
height: 118.3vh;
display:flex;
flex-direction: column;
align-items: center;
@media only screen and (min-width: 340px) and (max-width: 800px) {
  height: 100vh;
}
`

export const Header = styled.header`
text-align: center;
display: flex;
width: 66.5vw;
height: 20.5vh;
background-image: url(${TopoMkt});
background-size: cover;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 100vw;
 height: 12vh;   
 background-size: contain;
 background-repeat: no-repeat;
}

`
export const BoxLogin = styled.section`
width: 23vw;
height: 55vh;
border: solid 1px;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
background-color:whitesmoke;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 80vw;
 height: 60vh;
}
p{
    font-size: 18px;
    font-weight: bolder;
}
`
export const MainLogin = styled.main`
width: 66.5vw;
height:68vh;
 
display: flex;
justify-content: center;
align-items: center;
`

export const Footer = styled.footer`
width: 66.5vw;
height:25vh;
border-top: solid  ;
border-bottom: solid ;
display: flex;
align-items: center;
justify-content: space-around;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 100vw;
}
h3{
    font-size: 13.5px;
    @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-size: 3vw;
}
}

`

export const LinksFooter = styled.nav`
border-top: solid 1px;
border-bottom: solid 1px;
width: 11vw;
height: 15vh;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
  height: 20vh;
}
p{
    font-size: 13.5px;
    @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-size: 2vw;
}
}
 
`
export const BoxForm = styled.div`
width: 80%;
height: 21vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
input{
    border: solid 1.6px;
    width: 80%;
    height: 3.5vh;
    font-size: 16px;
    @media only screen and (min-width: 360px) and (max-width: 800px) {
     width: 56vw;
     height: 5vh;
     font-weight: bolder;
}
}
`

export const BoxBtn = styled.div`
width: 100%;
height: 6vh;
display: flex;
align-items:center;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
    height: 15vh;
    width: 100%;
}
button{
    border-style: none;
    background-color: black;
    font-size: 14px;
    color: white;
    width: 29%;
    height: 3vh;
    transition: all .2s ease-in-out;
    @media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 20vw;
    height: 4.5vh;
    font-size: 12px;
}
:hover{
    cursor: pointer;
    transform: scale(1.05)
}
}
`