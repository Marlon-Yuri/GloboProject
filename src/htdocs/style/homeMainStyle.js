import styled from "styled-components"

export const ImageBox = styled.section`
width: 100%;
height: 59vh;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
   display: flex;
   flex-direction: column;
   height: 163vh;
   justify-content: flex-start;
    
}

img{
  width: 45vw;
  height: 49vh;
  object-fit: cover;
  filter:brightness(50%);
  transition: all 0.5s ease-in-out;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
     object-fit: cover;
     width: 100vw;
    
     
}
  :hover{
    cursor: pointer;
    transform: scale(1.01);
  }
  }
`
export const Icon= styled.div`
width: 3vw;
position: absolute;
top: 4%;
left: 90%;
`
export const IconTwo= styled.div`
width: 3vw;
position: relative;
top:18%;
left: 1.3%;
@media only screen and (min-width: 360px) and (max-width: 800px) {
top:5%;
left: -22%; 
}
`

export const IconFila= styled.div`
width: 3vw;
position: relative;
top:12%;
height: 1vh;
left: 1.3%;
@media only screen and (min-width: 360px) and (max-width: 800px) {
top:33%;
height: 1vh;
left: 70%;
 
}
`

export const ImageBox2 = styled.section`
width: 100%;
height: 44.8vh;
display: flex;
justify-content: center;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 
  width: 100vw;
  height: 90vh;
  flex-direction: column;
  align-items:center ;
}

img{ 
  width: 37vw;
 
  object-fit: contain;
}
`


export const BoxMain1 = styled.div`
position: relative;

`
export const BoxMain2 = styled.div`
display: flex;
width: 45vw;
height: 41vh;
justify-content: space-between;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 95vw;
 height: 40vh;
 display: flex;
 justify-content: space-between;
 align-items: center;
 border-top: solid 1px;
 border-bottom: solid 1px;

}
`

export const Container = styled.section`
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`
export const BoxText = styled.div`
width: 42.5vw;
height: 20vh;
position: absolute;
bottom:5%;
left: 3.1%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
object-fit: cover;
@media only screen and (min-width: 360px) and (max-width: 800px) {
     position: initial;
     width: 90%;
     height: 30vh;
     margin-left: 5%;
     padding:2%;
     padding-top:3%;
  
}
p{
  width: 37vw;
  color: #c9d1d9;
  font-size: 1.2vw;
  font-family: 'Rubik', sans-serif;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
     width: 71vw;
     font-size: 4.5vw;
     color: black;
     line-height: 17px;
    
}

}
h3{
color: #c9d1d9;
font-size:1.9vw;
line-height:21px;
font-family: 'Rubik', sans-serif;
@media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 77vw;
    color: black;
    font-weight: bolder;
    font-size: 6vw;
    line-height: 25px;
}
}
`

export const LabelImage = styled.label`
color: #064960;
text-transform: uppercase;
font-size: 0.9vw;
font-family: 'Rubik', sans-serif;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 font-size: 2.7vw;
}
`
export const LabelImageFila = styled.label`
color: #064960;
text-transform: uppercase;
font-size: 0.9vw;
font-family: 'Rubik', sans-serif;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 font-size: 2.9vw;
 width: 30vw;
 position: relative;
 top: 22%;
 left:4%;
}
`

export const BoxText2 = styled.div`
 
display: flex;
height: 30vh;
flex-direction: column;
width: 22.5vw;
justify-content: space-evenly;
margin-top: 3.5%;
margin-right:5%;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 50vw;
 height: 30vh;
}
p{
  font-size: 21px;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-size: 3.5vw;
}
}
h3{
font-size:1.8vw;
line-height:1.9vw;
width: 20vw;
 
font-family: 'Rubik', sans-serif;
@media only screen and (min-width: 360px) and (max-width: 800px) {
  font-size:4.5vw;
  height: 19vh;
  line-height: 20px;
  margin-bottom: 5%;
  width: 50vw;
}
}
`

export const ImageBoxFileira = styled.section`
width: 100%;
height: 51vh;
display: flex;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 155vh;
 
 
}
img{
  width: 20.6vw;
  object-fit: contain;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
  width: 47vw;
  position: relative;
  right: 25.2%;
  top: 5%;
 
 
}
  }
`
export const BoxMain3 = styled.div`
width:22vw;
display: flex;
align-items: center;
flex-direction: column;
@media only screen and (min-width: 360px) and (max-width: 800px) {
  border-bottom:solid 1px;
  width: 95vw;
  height: 32vh;
 
}
`

export const BoxText3 = styled.div`
 
display: flex;
height: 19vh;
width: 21vw;
flex-direction: column;
justify-content: space-evenly;
p{
  font-size: 20px;
  font-family: 'Rubik', sans-serif;
 
}
h3{
font-size:1.7vw;
line-height:25px;
font-family: 'Rubik', sans-serif;
}
@media only screen and (min-width: 360px) and (max-width: 800px) {
 
  width: 50vw;
  position: absolute;
  left: 49%;
  
p{
  font-size: 3.7vw;
  position: relative;
  top: 50%;
  right: 93%;
}
h3{
  font-size: 4.5vw;
  position: relative;
  top: 30%;
  left: 4%;
}
}
`


export const Propaganda = styled.div`
width: 100%;
height: 30vh;
border: solid 1px gray;
display: flex;
justify-content:center;
align-items: center;
@media only screen and (min-width: 360px) and (max-width: 800px) {
  width: 100vw;
  height: 20vh;
  
}
`

export const BoxPropaganda = styled.div`
width: 70vw;
height: 20vh;
background-color: #DCDCDC;
@media only screen and (min-width: 360px) and (max-width: 800px) {
  width: 100%;
  height: 19.4vh;
  background: contain;
p{
  font-family:Arial, Helvetica, sans-serif;
} 
}
`
