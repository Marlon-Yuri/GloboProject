import styled from 'styled-components'

export const Container = styled.section`
width: 100%;
height: 15vh;
display: flex;
align-items: center;
justify-content:center ;
background-color:#064960;
@media only screen and (min-width: 360px) and (max-width: 800px){

}
`
export const SquareBox= styled.div`
display: flex;
height: 10vh;
flex-direction: column;
justify-content: space-evenly;
margin-left:0.5%;
margin-top:1%;
@media only screen and (min-width: 360px) and (max-width: 800px) {
    height: 5vh;
}
 div{
  width: 1.1vw;
  height: 2.2vh;
  background-color: #FFFF00;
  @media only screen and (min-width: 360px) and (max-width: 800px){
    width: 2vw;
    height: 1.2vh;
    display: flex;
}
 }
`
 
export const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 35vw;
height: 10vh;
position: relative;
right: 6.8%;
h1{
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size:5.3vw;
    @media only screen and (min-width: 360px) and (max-width: 800px){
    font-size: 9vw;
    margin-left: 10%;
}
}
`

