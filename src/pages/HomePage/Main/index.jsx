import React from 'react'
import data from '../../../data/data.json'
import styled from 'styled-components'
import ImageBrasil from '../../../htdocs/assets/media/464x261-1.jpeg'
import ImageModa from '../../../htdocs/assets/media/464x261-2.jpeg'
import ImageComportamento from '../../../htdocs/assets/media/216x216-1.jpeg'
import ImageEstilo from '../../../htdocs/assets/media/216x216-2.jpeg'
import ImageRural from '../../../htdocs/assets/media/216x121-1.jpeg'
import ImageRun from '../../../htdocs/assets/media/216x121-2.jpeg'
import ImageEducation from '../../../htdocs/assets/media/216x121-3.jpeg'
import ImageEco from '../../../htdocs/assets/media/216x121-4.jpeg'




const ImageBox = styled.section`
width: 100%;
height: 59vh;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
@media (max-width: 715px) {
   display: flex;
 
   flex-direction: column;
   justify-content: space-between;
   height: 187vh;
 
}

img{
  width: 45vw;
  height: 49vh;
  object-fit: cover;
  filter:brightness(50%);
  transition: all 0.5s ease-in-out;
  @media (max-width: 715px) {
     object-fit: cover;
     width: 100%;
     height: 65vh;
     
}
  :hover{
    cursor: pointer;
    transform: scale(1.01);
  }
  }
`

const ImageBox2 = styled.section`
width: 100%;
height: 44.8vh;
display: flex;
justify-content: center;
justify-content: space-evenly;

img{ 
  width: 20.4vw;
  height: 40.8vh;
  object-fit: cover;
}
`


const BoxMain1 = styled.div`
position: relative;

`
const BoxMain2 = styled.div`
display: flex;
width: 45vw;
height: 41vh;
justify-content: space-between;
 
`

const Container = styled.section`
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`
const BoxText = styled.div`
width: 42.5vw;
height: 20vh;
position: absolute;
bottom:5%;
left: 3.1%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
object-fit: cover;
@media (max-width: 715px) {
     position: initial;
     width: 90%;
     height: 24.5vh;
     margin-left: 5%;;
     line-height: 25px;
 
     padding:2%;
     padding-top:5%;
}
p{
  width: 37vw;
  color: #c9d1d9;
  font-size: 1.2vw;
  font-family: 'Rubik', sans-serif;
  @media (max-width: 715px) {
     width: 71vw;
     font-size: 3.1vw;
     color: black;
    
}

}
h3{
color: #c9d1d9;
font-size:1.9vw;
line-height:21px;
font-family: 'Rubik', sans-serif;
@media (max-width: 715px) {
    width: 77vw;
    color: black;
    font-weight: bolder;
    font-size: 5vw;
    line-height: 34.5px;
}
}
`

const LabelImage = styled.label`
color: #064960;
text-transform: uppercase;
font-size: 0.9vw;
font-family: 'Rubik', sans-serif;
@media (max-width: 715px) {
   border: solid blue
}
`

const BoxText2 = styled.div`
 
display: flex;
height: 30vh;
flex-direction: column;
width: 22.5vw;
justify-content: space-evenly;
p{
  font-size: 21px;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";;
}
h3{
font-size:1.8vw;
line-height:1.9vw;
font-family: 'Rubik', sans-serif;
}
`

const ImageBoxFileira = styled.section`
width: 100%;
height: 51vh;
display: flex;
justify-content: space-evenly;
img{
  width: 20.6vw;
  object-fit: contain;
  }
`
const BoxMain3 = styled.div`
 
width:22vw;
display: flex;
align-items: center;
flex-direction: column;
` 

const BoxText3 = styled.div`
 
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
`


const Propaganda = styled.div`
width: 100%;
height: 30vh;
border: solid 1px gray;
display: flex;
justify-content:center;
align-items: center;
`

const BoxPropaganda = styled.div`
width: 70vw;
height: 20vh;
background-color: gray;
`


export default function Main() {


console.log(data.section[1])

  return (
    <Container>
      <ImageBox>
        <BoxMain1>
           <img src={ImageBrasil} alt='Jogo de críquete'/>
           <BoxText>
             <p>{data.section[0].data[0].label}</p>
             <h3>{data.section[0].data[0].title}</h3>
             <p>{data.section[0].data[0].description}</p>
           </BoxText>      
        </BoxMain1>
        <BoxMain1>
           <img src={ImageModa} alt='Desfile de moda'/>
           <BoxText>
             <p>{data.section[0].data[1].label}</p>
             <h3>{data.section[0].data[1].title}</h3>
             <p>{data.section[0].data[1].description}</p>
           </BoxText>
        </BoxMain1>  
      </ImageBox>  
       <ImageBox2>
       <BoxMain2>
           <img src={ImageComportamento} alt='Casal'/>
           <BoxText2>
             <LabelImage><strong>{data.section[0].data[2].label}</strong></LabelImage>
             <h3>{data.section[0].data[2].title}</h3>
             <p>{data.section[0].data[2].description}</p>
           </BoxText2>      
        </BoxMain2>
        <BoxMain2>
           <img src={ImageEstilo} alt='Mulher na janela'/>
           <BoxText2>
             <LabelImage><strong>{data.section[0].data[3].label}</strong></LabelImage>
             <h3>{data.section[0].data[3].title}</h3>
             <p>{data.section[0].data[3].description}</p>
           </BoxText2>      
        </BoxMain2>
       </ImageBox2>
       <ImageBoxFileira>
       <BoxMain3>
           <img src={ImageRural} alt='Foto de porco'/>
           <BoxText3>
             <LabelImage><strong>{data.section[0].data[4].label}</strong></LabelImage>
             <h3>{data.section[0].data[4].title}</h3>
             <p>{data.section[0].data[4].description}</p>
           </BoxText3>      
        </BoxMain3>
        <BoxMain3>
           <img src={ImageRun} alt='Corrida feminina'/>
           <BoxText3>
             <LabelImage><strong>{data.section[0].data[5].label}</strong></LabelImage>
             <h3>{data.section[0].data[5].title}</h3>
             <p>{data.section[0].data[5].description}</p>
           </BoxText3>      
        </BoxMain3>
        <BoxMain3>
           <img src={ImageEducation} alt='Imagem de crianã'/>
           <BoxText3>
             <LabelImage><strong>{data.section[0].data[6].label}</strong></LabelImage>
             <h3>{data.section[0].data[6].title}</h3>
             <p>{data.section[0].data[6].description}</p>
           </BoxText3>      
        </BoxMain3>
        <BoxMain3>
           <img src={ImageEco} alt='Imagem de orquídia'/>
           <BoxText3>
             <LabelImage><strong>{data.section[0].data[7].label}</strong></LabelImage>
             <h3>{data.section[0].data[7].title}</h3>
             <p>{data.section[0].data[7].description}</p>
           </BoxText3>      
        </BoxMain3>
       </ImageBoxFileira>
       <Propaganda>
         <BoxPropaganda>
         </BoxPropaganda>
       </Propaganda>
     </Container>
  )
}
