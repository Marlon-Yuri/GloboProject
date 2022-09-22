import React from 'react'
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
import * as S from '../../../htdocs/style/homeWorldStyle'

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
        <h1>{data.section[2].name}</h1>
        <S.WorldSection>
         <Carousel {...info} style={{width:'95vw', marginBottom:'2%'}}>
          <S.SectionItem>
             <img src={FeriadoImg} alt='Árvores no outono'/>
             <S.WorldItemText>

             <S.LabelImage><strong>{data.section[1].data[2].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[2].title}</h2>
             <p>{data.section[1].data[2].description}</p>
    
             </S.WorldItemText>
          </S.SectionItem>
          <S.SectionItem>
             <img src={AgroImg} alt='Árvore em dia de sol'/>
             <S.WorldItemText>
             
             <S.LabelImage><strong>{data.section[1].data[3].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[3].title}</h2>
             <p>{data.section[1].data[3].description}</p>
    
             </S.WorldItemText>
          </S.SectionItem>
          <S.SectionItem>
             <img src={InterImg} alt='Prédios'/>
             <S.WorldItemText>
             
             <S.LabelImage><strong>{data.section[2].data[2].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[2].title}</h2>
             <p>{data.section[2].data[2].description}</p>
    
             </S.WorldItemText>
          </S.SectionItem>
          <S.SectionItem>
             <img src={OnuImg} alt='Arco histórico'/>
             <S.WorldItemText>
             
             <S.LabelImage><strong>{data.section[2].data[3].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[3].title}</h2>
             <p>{data.section[2].data[3].description}</p>
    
             </S.WorldItemText>
          </S.SectionItem>


          <S.SectionItem>
             <img src={OrienteMedioImg} alt='Oriente Médio'/>
             <S.WorldItemText>
             
             <S.LabelImage><strong>{data.section[2].data[4].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[3].title}</h2>
             <p>{data.section[2].data[3].description}</p>
    
             </S.WorldItemText>
          </S.SectionItem>

          <S.SectionItem>
             <img src={IsraelImg} alt='Israel'/>
             <S.WorldItemText>
             
             <S.LabelImage><strong>{data.section[2].data[5].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[5].title}</h2>
             <p>{data.section[2].data[5].description}</p>
    
             </S.WorldItemText>
          </S.SectionItem>

          <S.SectionItem>
             <img src={SiriaImg} alt='Siria'/>
             <S.WorldItemText>
             
             <S.LabelImage><strong>{data.section[2].data[6].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[6].title}</h2>
             <p>{data.section[2].data[6].description}</p>
    
             </S.WorldItemText>
          </S.SectionItem>

          <S.SectionItem>
             <img src={ChinaImg} alt='China'/>
             <S.WorldItemText>
             
             <S.LabelImage><strong>{data.section[2].data[7].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[7].title}</h2>
             <p>{data.section[2].data[7].description}</p>
    
             </S.WorldItemText>
          </S.SectionItem>
          
          </Carousel>
        </S.WorldSection>
        <S.SelectWorld>
           <Link style={{textDecoration:'none', color: '#064960'}} to='/mundo'><h3>MUNDO +</h3></Link>
        </S.SelectWorld>
    </S.Container>
  )
}
