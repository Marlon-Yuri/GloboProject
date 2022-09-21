import React from 'react'
import styled from 'styled-components'
import data from '../../../data/data.json'
import {Link} from 'react-router-dom'
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
 

const WorldSection = styled.section`
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
const WorldItemText = styled.div`
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
    width: 20vw;
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

const LabelImage = styled.label`
color: #064960;
text-transform: uppercase;
font-size: 14px;
@media only screen and (min-width: 360px) and (max-width: 800px) {
   font-size: 2.4vw;
   text-align: center;
 
}
`

const SelectWorld = styled.div`
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
        <h1>{data.section[2].name}</h1>
        <WorldSection>
         <Carousel {...info} style={{width:'95vw', marginBottom:'2%'}}>
          <SectionItem>
             <img src={FeriadoImg} alt='Árvores no outono'/>
             <WorldItemText>

             <LabelImage><strong>{data.section[1].data[2].label}</strong></LabelImage>
             <h2>{data.section[1].data[2].title}</h2>
             <p>{data.section[1].data[2].description}</p>
    
             </WorldItemText>
          </SectionItem>
          <SectionItem>
             <img src={AgroImg} alt='Árvore em dia de sol'/>
             <WorldItemText>
             
             <LabelImage><strong>{data.section[1].data[3].label}</strong></LabelImage>
             <h2>{data.section[1].data[3].title}</h2>
             <p>{data.section[1].data[3].description}</p>
    
             </WorldItemText>
          </SectionItem>
          <SectionItem>
             <img src={InterImg} alt='Prédios'/>
             <WorldItemText>
             
             <LabelImage><strong>{data.section[2].data[2].label}</strong></LabelImage>
             <h2>{data.section[2].data[2].title}</h2>
             <p>{data.section[2].data[2].description}</p>
    
             </WorldItemText>
          </SectionItem>
          <SectionItem>
             <img src={OnuImg} alt='Arco histórico'/>
             <WorldItemText>
             
             <LabelImage><strong>{data.section[2].data[3].label}</strong></LabelImage>
             <h2>{data.section[2].data[3].title}</h2>
             <p>{data.section[2].data[3].description}</p>
    
             </WorldItemText>
          </SectionItem>


          <SectionItem>
             <img src={OrienteMedioImg} alt='Oriente Médio'/>
             <WorldItemText>
             
             <LabelImage><strong>{data.section[2].data[4].label}</strong></LabelImage>
             <h2>{data.section[2].data[3].title}</h2>
             <p>{data.section[2].data[3].description}</p>
    
             </WorldItemText>
          </SectionItem>

          <SectionItem>
             <img src={IsraelImg} alt='Israel'/>
             <WorldItemText>
             
             <LabelImage><strong>{data.section[2].data[5].label}</strong></LabelImage>
             <h2>{data.section[2].data[5].title}</h2>
             <p>{data.section[2].data[5].description}</p>
    
             </WorldItemText>
          </SectionItem>

          <SectionItem>
             <img src={SiriaImg} alt='Siria'/>
             <WorldItemText>
             
             <LabelImage><strong>{data.section[2].data[6].label}</strong></LabelImage>
             <h2>{data.section[2].data[6].title}</h2>
             <p>{data.section[2].data[6].description}</p>
    
             </WorldItemText>
          </SectionItem>

          <SectionItem>
             <img src={ChinaImg} alt='China'/>
             <WorldItemText>
             
             <LabelImage><strong>{data.section[2].data[7].label}</strong></LabelImage>
             <h2>{data.section[2].data[7].title}</h2>
             <p>{data.section[2].data[7].description}</p>
    
             </WorldItemText>
          </SectionItem>
          
          </Carousel>
        </WorldSection>
        <SelectWorld>
           <Link style={{textDecoration:'none'}} to='/mundo'><h3>MUNDO +</h3></Link>
        </SelectWorld>
    </Container>
  )
}
