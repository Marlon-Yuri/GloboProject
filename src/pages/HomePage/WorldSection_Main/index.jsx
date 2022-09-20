import React from 'react'
import styled from 'styled-components'
import data from '../../../data/data.json'
import Carousel from 'nuka-carousel'
import FeriadoImg from '../../../htdocs/assets/media/216x121-9.jpeg'
import AgroImg from '../../../htdocs/assets/media/216x121-11.jpeg'
import InterImg from '../../../htdocs/assets/media/216x121-7.jpeg'
import OnuImg from '../../../htdocs/assets/media/216x121-5.jpeg'
import OrienteMedioImg from '../../../htdocs/assets/media/216x121-orientemedio.jpg'
import IsraelImg from '../../../htdocs/assets/media/216x121-israel.jpg'
import SiriaImg from '../../../htdocs/assets/media/216x121-siria.jpg'
import ChinaImg from '../../../htdocs/assets/media/216x121-china.jpg'

const Container = styled.section`
width: 100%;
height:70vh;
display: flex;
flex-wrap: wrap;
justify-content: center;
h1{
    color: blue;
    margin-right:88%;
    padding-top: 2.2%;
    font-size: 35px;
}
`
const BrasilSection = styled.section`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: flex-end;

`
const SectionItem = styled.div`
 
width:22vw;
height: 50vh;
display: flex;
align-items: center;
flex-direction: column;

img{
  width: 20.6vw;
  transition: all 0.5s ease-in-out;
  object-fit: contain;
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

const SelectBrasil = styled.div`
width: 94.2vw;
height:6vh;
border-bottom: 1px solid;
border-top: 1px solid;
display: flex;
justify-content: flex-end;
align-items: center;
h3{
    font-weight: bolder;
    color: #064960;
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
           fill: "black"
   }
        
    }
}

export default function BrazilSection() {

    console.log(data.section)
  return (
    <Container>
        <h1>{data.section[2].name}</h1>
        <BrasilSection>
         <Carousel {...info} style={{width:'95vw'}}>
          <SectionItem>
             <img src={FeriadoImg} alt='Árvores no outono'/>
             <BrasilItemText>

             <LabelImage><strong>{data.section[1].data[2].label}</strong></LabelImage>
             <h2>{data.section[1].data[2].title}</h2>
             <p>{data.section[1].data[2].description}</p>
    
             </BrasilItemText>
          </SectionItem>
          <SectionItem>
             <img src={AgroImg} alt='Árvore em dia de sol'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[1].data[3].label}</strong></LabelImage>
             <h2>{data.section[1].data[3].title}</h2>
             <p>{data.section[1].data[3].description}</p>
    
             </BrasilItemText>
          </SectionItem>
          <SectionItem>
             <img src={InterImg} alt='Prédios'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[2].data[2].label}</strong></LabelImage>
             <h2>{data.section[2].data[2].title}</h2>
             <p>{data.section[2].data[2].description}</p>
    
             </BrasilItemText>
          </SectionItem>
          <SectionItem>
             <img src={OnuImg} alt='Arco histórico'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[2].data[3].label}</strong></LabelImage>
             <h2>{data.section[2].data[3].title}</h2>
             <p>{data.section[2].data[3].description}</p>
    
             </BrasilItemText>
          </SectionItem>


          <SectionItem>
             <img src={OrienteMedioImg} alt='Oriente Médio'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[2].data[4].label}</strong></LabelImage>
             <h2>{data.section[2].data[3].title}</h2>
             <p>{data.section[2].data[3].description}</p>
    
             </BrasilItemText>
          </SectionItem>

          <SectionItem>
             <img src={IsraelImg} alt='Israel'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[2].data[5].label}</strong></LabelImage>
             <h2>{data.section[2].data[5].title}</h2>
             <p>{data.section[2].data[5].description}</p>
    
             </BrasilItemText>
          </SectionItem>

          <SectionItem>
             <img src={SiriaImg} alt='Siria'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[2].data[6].label}</strong></LabelImage>
             <h2>{data.section[2].data[6].title}</h2>
             <p>{data.section[2].data[6].description}</p>
    
             </BrasilItemText>
          </SectionItem>

          <SectionItem>
             <img src={ChinaImg} alt='China'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[2].data[7].label}</strong></LabelImage>
             <h2>{data.section[2].data[7].title}</h2>
             <p>{data.section[2].data[7].description}</p>
    
             </BrasilItemText>
          </SectionItem>
          
          </Carousel>
        </BrasilSection>
        <SelectBrasil>
           <h3><strong>MUNDO +</strong></h3>
        </SelectBrasil>
    </Container>
  )
}
