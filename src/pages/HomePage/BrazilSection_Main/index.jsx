import React from 'react'
import styled from 'styled-components'
import data from '../../../data/data.json'
import {Link} from 'react-router-dom'
import NatureImg from '../../../htdocs/assets/media/216x121-8.jpeg'
import StreetImg from '../../../htdocs/assets/media/216x121-12.jpeg'
import EuaImg from '../../../htdocs/assets/media/216x121-6.jpeg'
import SeaImg from '../../../htdocs/assets/media/216x121-10.jpeg'
import BrasilImg from '../../../htdocs/assets/media/216x121-brasília.webp'
import LavaJaImg from '../../../htdocs/assets/media/216x121-lava-jato.jpg'
import ComercioImg from '../../../htdocs/assets/media/216x121-comercio.jpg'
import ViolImg from '../../../htdocs/assets/media/216x121-violencia.jpg'
import Carousel from 'nuka-carousel'

const Container = styled.section`
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
    left: 9%;
 
}

}
@media only screen and (min-width: 360px) and (max-width: 800px) {
    border-bottom: solid 1px;
    height: 60vw;
   
}
`
 

const BrasilSection = styled.section`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: flex-end;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 
    height: 30vh;
     
 
}

`
const SectionItem = styled.div`
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
    height: 50vh;
    
img{
   display: none;
} 

}
`
const BrasilItemText = styled.div`
display: flex;
height: 19vh;
width: 20.7vw;
flex-direction: column;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
    border: solid 1px;
    position: relative;
    top: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22vw;
}
p{
  font-size: 20px;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
   display: none;
    
}
}
h2{
font-size:26px;
line-height:21px;
font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-size: 2vw;
    text-align: center;
}
 
}
`

const LabelImage = styled.label`
color: #064960;
text-transform: uppercase;
font-size: 14px;
@media only screen and (min-width: 360px) and (max-width: 800px) {
     
 
}
`

const SelectBrasil = styled.div`
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




const info = {
  wrapAround: true,
  autoplay: true,
  speed:3000,
  autoplayInterval: 4000,
  adaptiveHeight:true,
  frameOverflow:"visible",
  slidesToShow:3.9,
  defaultControlsConfig: {
      nextButtonText: ">",
      prevButtonText: "<",
       pagingDotsStyle: {
           fill: "none"
   }
        
    }
    
}

export default function BrazilSection() {

    console.log(data.section)
  return (
    <Container>
        <h1>{data.section[1].name}</h1>
        <BrasilSection>
        <Carousel {...info} style={{width:'95vw', marginBottom:'2%'}}>
          <SectionItem>
             <img src={NatureImg} alt=''/>
             <BrasilItemText>

             <LabelImage><strong>{data.section[1].data[0].label}</strong></LabelImage>
             <h2>{data.section[1].data[0].title}</h2>
             <p>{data.section[1].data[0].description}</p>
    
             </BrasilItemText>
          </SectionItem>
          <SectionItem>
             <img src={StreetImg} alt=''/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[1].data[1].label}</strong></LabelImage>
             <h2>{data.section[1].data[1].title}</h2>
             <p>{data.section[1].data[1].description}</p>
    
             </BrasilItemText>
          </SectionItem>
          <SectionItem>
             <img src={EuaImg} alt=''/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[2].data[0].label}</strong></LabelImage>
             <h2>{data.section[2].data[0].title}</h2>
             <p>{data.section[2].data[0].description}</p>
    
             </BrasilItemText>
          </SectionItem>
          <SectionItem>
             <img src={SeaImg} alt=''/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[2].data[1].label}</strong></LabelImage>
             <h2>{data.section[2].data[1].title}</h2>
             <p>{data.section[2].data[1].description}</p>
    
             </BrasilItemText>
          </SectionItem>
  
          <SectionItem>
             <img src={BrasilImg} alt='Brasília'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[1].data[4].label}</strong></LabelImage>
             <h2>{data.section[1].data[4].title}</h2>
             <p>{data.section[1].data[4].description}</p>
    
             </BrasilItemText>
          </SectionItem>

          <SectionItem>
             <img src={LavaJaImg} alt='Operação Lava-a-jato'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[1].data[5].label}</strong></LabelImage>
             <h2>{data.section[1].data[5].title}</h2>
             <p>{data.section[1].data[5].description}</p>
    
             </BrasilItemText>
          </SectionItem>

          <SectionItem>
             <img src={ComercioImg} alt='Imagem de comércio'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[1].data[6].label}</strong></LabelImage>
             <h2>{data.section[1].data[6].title}</h2>
             <p>{data.section[1].data[6].description}</p>
    
             </BrasilItemText>
          </SectionItem>

          <SectionItem>
             <img src={ViolImg} alt='Diga não a violência'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[1].data[7].label}</strong></LabelImage>
             <h2>{data.section[1].data[7].title}</h2>
             <p>{data.section[1].data[7].description}</p>
    
             </BrasilItemText>
          </SectionItem>
          
          </Carousel>
        </BrasilSection>
        <SelectBrasil>
           <Link style={{textDecoration: 'none'}} to='/brasil'>BRASIL +</Link>
        </SelectBrasil>
    </Container>
  )
}
