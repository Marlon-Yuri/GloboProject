import React from 'react'
import Footer from '../../services/Footer/index'
import {Link} from 'react-router-dom'
import data from '../../data/data.json'
import NatureImg from '../../htdocs/assets/media/216x121-8.jpeg'
import StreetImg from '../../htdocs/assets/media/216x121-12.jpeg'
import EuaImg from '../../htdocs/assets/media/216x121-6.jpeg'
import SeaImg from '../../htdocs/assets/media/216x121-10.jpeg'
import BrasilImg from '../../htdocs/assets/media/216x121-brasília.webp'
import LavaJaImg from '../../htdocs/assets/media/216x121-lava-jato.jpg'
import ComercioImg from '../../htdocs/assets/media/216x121-comercio.jpg'
import ViolImg from '../../htdocs/assets/media/216x121-violencia.jpg'
import * as S from '../../htdocs/style/brasilSection'


export default function BrasilPages() {
  return (
   <S.Container>
    <S.Title>
      <Link style={{textDecoration: 'none', color:'black'}} to='/home'><h1>Home +</h1> </Link>
    </S.Title>
    <S.Cards> 
        <S.SectionItem>
             <img src={NatureImg} alt='Imagem de rio'/>
             <S.BrasilItemText>

             <S.LabelImage><strong>{data.section[1].data[0].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[0].title}</h2>
             <p>{data.section[1].data[0].description}</p>
    
             </S.BrasilItemText>
             <S.SLink to='/brasil/natureza'>Acessar</S.SLink>
          </S.SectionItem>
          <S.SectionItem>
             <img src={StreetImg} alt=''/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[1].data[1].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[1].title}</h2>
             <p>{data.section[1].data[1].description}</p>
    
             </S.BrasilItemText>
             <S.SLink to='/brasil/cidades'>Acessar</S.SLink>
          </S.SectionItem>
          <S.SectionItem>
             <img src={EuaImg} alt=''/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[2].data[0].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[0].title}</h2>
             <p>{data.section[2].data[0].description}</p>
    
             </S.BrasilItemText>
             <S.SLink to='/brasil/eua'>Acessar</S.SLink>
          </S.SectionItem>
          <S.SectionItem>
             <img src={SeaImg} alt=''/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[2].data[1].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[1].title}</h2>
             <p>{data.section[2].data[1].description}</p>
    
             </S.BrasilItemText>
             <S.SLink to='/brasil/turismo'>Acessar</S.SLink>
          </S.SectionItem>
 
          <S.SectionItem>
             <img src={BrasilImg} alt='Brasília'/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[1].data[4].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[4].title}</h2>
             <p>{data.section[1].data[4].description}</p>
    
             </S.BrasilItemText>
             <S.SLink to='/brasil/brasilia'>Acessar</S.SLink>
          </S.SectionItem>

          <S.SectionItem>
             <img src={LavaJaImg} alt='Operação Lava-a-jato'/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[1].data[5].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[5].title}</h2>
             <p>{data.section[1].data[5].description}</p>
    
             </S.BrasilItemText>
             <S.SLink to='/brasil/lavajato'>Acessar</S.SLink>
          </S.SectionItem>

          <S.SectionItem>
             <img src={ComercioImg} alt='Imagem de comércio'/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[1].data[6].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[6].title}</h2>
             <p>{data.section[1].data[6].description}</p>
    
             </S.BrasilItemText>
             <S.SLink to='/brasil/comercio'>Acessar</S.SLink>
          </S.SectionItem>

          <S.SectionItem>
             <img src={ViolImg} alt='Diga não a violência'/>
             <S.BrasilItemText>
             
             <S.LabelImage><strong>{data.section[1].data[7].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[7].title}</h2>
             <p>{data.section[1].data[7].description}</p>
    
             </S.BrasilItemText>
             <S.SLink to='/brasil/violencia'>Acessar</S.SLink>
          </S.SectionItem>
          


    </S.Cards>
    <Footer/>
    </S.Container>
  )
}
 