import React from 'react'
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
import * as S from '../../../htdocs/style/homeBrasilStyle'
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
    <S.Container>
        <h1>{data.section[1].name}</h1>
        <S.BrasilSection>
        <Carousel {...info} style={{width:'95vw', marginBottom:'2%'}}>
          <S.SectionItem>
             <img src={NatureImg} alt=''/>
             <S.BrasilItemText>

             <S.LabelImage><strong>{data.section[1].data[0].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[0].title}</h2>
             <p>{data.section[1].data[0].description}</p>
    
             </S.BrasilItemText>
          </S.SectionItem>
          <S.SectionItem>
             <img src={StreetImg} alt=''/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[1].data[1].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[1].title}</h2>
             <p>{data.section[1].data[1].description}</p>
    
             </S.BrasilItemText>
          </S.SectionItem>
          <S.SectionItem>
             <img src={EuaImg} alt=''/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[2].data[0].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[0].title}</h2>
             <p>{data.section[2].data[0].description}</p>
    
             </S.BrasilItemText>
          </S.SectionItem>
          <S.SectionItem>
             <img src={SeaImg} alt=''/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[2].data[1].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[1].title}</h2>
             <p>{data.section[2].data[1].description}</p>
    
             </S.BrasilItemText>
          </S.SectionItem>
  
          <S.SectionItem>
             <img src={BrasilImg} alt='Brasília'/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[1].data[4].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[4].title}</h2>
             <p>{data.section[1].data[4].description}</p>
    
             </S.BrasilItemText>
          </S.SectionItem>

          <S.SectionItem>
             <img src={LavaJaImg} alt='Operação Lava-a-jato'/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[1].data[5].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[5].title}</h2>
             <p>{data.section[1].data[5].description}</p>
    
             </S.BrasilItemText>
          </S.SectionItem>

          <S.SectionItem>
             <img src={ComercioImg} alt='Imagem de comércio'/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[1].data[6].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[6].title}</h2>
             <p>{data.section[1].data[6].description}</p>
    
             </S.BrasilItemText>
          </S.SectionItem>

          <S.SectionItem>
             <img src={ViolImg} alt='Diga não a violência'/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[1].data[7].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[7].title}</h2>
             <p>{data.section[1].data[7].description}</p>
    
             </S.BrasilItemText>
          </S.SectionItem>
          
          </Carousel>
        </S.BrasilSection>
        <S.SelectBrasil>
           <Link style={{textDecoration: 'none'}} to='/brasil'>BRASIL +</Link>
        </S.SelectBrasil>
    </S.Container>
  )
}
