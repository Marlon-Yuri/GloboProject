import styled from "styled-components"

export const Container = styled.section`
width: 100%;
height:70vh;
display: flex;
flex-wrap: wrap;
justify-content: center;
h1{
    color: #064960;
    margin-right:86%;
    padding-top: 2.2%;
    font-size: 35px;
    font-family: 'Kanit', sans-serif;
    @media only screen and (min-width: 360px) and (max-width: 800px) {
  
    position: relative;
    left: 11%;
 
}

}
@media only screen and (min-width: 360px) and (max-width: 800px) {
    border-bottom: solid 1px;
    height: 60vw;
    
   
}
`
 

export const WorldSection = styled.section`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: flex-end;
@media only screen and (min-width: 360px) and (max-width: 800px) {
   
    height: 30vh;
     
 
}

`
export const SectionItem = styled.div`
width:22vw;
height: 45vh;
display: flex;
align-items: center;
justify-content: space-between;
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

@media only screen and (min-width: 360px) and (max-width: 800px) {
 
    width: 40vw;
    height: 35vh;
    
img{
   display: none;
} 

}
`
export const WorldItemText = styled.div`
display: flex;
height: 19vh;
width: 20.7vw;
flex-direction: column;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
    border: solid 1px;
    position: relative;
    top: 22%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
    background-color:#CFCFCF;
}
p{
  font-size: 20px;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
   border: solid;
   display: none;
    
}
}
h2{
font-size:26px;
line-height:21px;
font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-size: 2vw;
}


 
 

 
}
`

export const LabelImage = styled.label`
color: #064960;
text-transform: uppercase;
font-size: 14px;
@media only screen and (min-width: 360px) and (max-width: 800px) {
   font-size: 2.4vw;
   text-align: center;
 
}
`

export const SelectWorld = styled.div`
width: 94.2vw;
height:6vh;
border-bottom: 1px solid;
border-top: 1px solid;
display: flex;
justify-content: flex-end;
align-items: center;
font-weight: bolder;
color: #064960;
font-family: 'Kanit', sans-serif;
font-size: 1.3vw;
@media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 30vw;
    font-size: 4vw;
    position: relative;
    bottom: 27%;
    left: 34%;
    border: none;
}
`

