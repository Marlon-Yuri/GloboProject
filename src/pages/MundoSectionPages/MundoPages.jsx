import React from 'react'
import Footer from '../../services/Footer/index'
import {Link} from 'react-router-dom'
import data from '../../data/data.json'
import FeriadoImg from '../../htdocs/assets/media/216x121-9.jpeg'
import AgroImg from '../../htdocs/assets/media/216x121-11.jpeg'
import InterImg from '../../htdocs/assets/media/216x121-7.jpeg'
import OnuImg from '../../htdocs/assets/media/216x121-5.jpeg'
import OrienteMedioImg from '../../htdocs/assets/media/216x121-orientemedio.jpg'
import IsraelImg from '../../htdocs/assets/media/216x121-israel.jpg'
import SiriaImg from '../../htdocs/assets/media/216x121-siria.jpg'
import ChinaImg from '../../htdocs/assets/media/216x121-china.jpg'
import * as S from '../../htdocs/style/mundoSection'


export default function BrasilPages() {
  return (
   <S.Container>
    <S.Title>
      <Link style={{textDecoration: 'none', color:'black'}} to='/home'><h1>Home +</h1> </Link>
    </S.Title>
    <S.Cards> 
        <S.SectionItem>
        <img src={FeriadoImg} alt='Árvores no outono'/>
             <S.MundoItemText>

             <S.LabelImage><strong>{data.section[1].data[2].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[2].title}</h2>
             <p>{data.section[1].data[2].description}</p>
    
             </S.MundoItemText>
             <S.SLink to='/mundo/feriado'>Acessar</S.SLink>
          </S.SectionItem>
          <S.SectionItem>
          <img src={AgroImg} alt='Árvore em dia de sol'/>
             <S.MundoItemText>
             
             <S.LabelImage><strong>{data.section[1].data[3].label}</strong></S.LabelImage>
             <h2>{data.section[1].data[3].title}</h2>
             <p>{data.section[1].data[3].description}</p>
    
             </S.MundoItemText>
             <S.SLink to='/mundo/agricultura'>Acessar</S.SLink>
          </S.SectionItem>
          <S.SectionItem>
          <img src={InterImg} alt='Prédios'/>
             <S.MundoItemText>
             
             <S.LabelImage><strong>{data.section[2].data[2].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[2].title}</h2>
             <p>{data.section[2].data[2].description}</p>
    
             </S.MundoItemText>
             <S.SLink to='/mundo/internacional'>Acessar</S.SLink>
          </S.SectionItem>
          <S.SectionItem>
          <img src={OnuImg} alt='Arco histórico'/>
             <S.MundoItemText>
             
             <S.LabelImage><strong>{data.section[2].data[3].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[3].title}</h2>
             <p>{data.section[2].data[3].description}</p>
    
             </S.MundoItemText>
             <S.SLink to='/mundo/onu'>Onu</S.SLink>
          </S.SectionItem>
 
          <S.SectionItem>
          <img src={OrienteMedioImg} alt='Oriente Médio'/>
             <S.MundoItemText>
             
             <S.LabelImage><strong>{data.section[2].data[4].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[3].title}</h2>
             <p>{data.section[2].data[3].description}</p>
    
    
             </S.MundoItemText>
             <S.SLink to='/mundo/orientemedio'>Acessar</S.SLink>
          </S.SectionItem>

          <S.SectionItem>
          <img src={IsraelImg} alt='Israel'/>
             <S.MundoItemText>
             
             <S.LabelImage><strong>{data.section[2].data[5].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[5].title}</h2>
             <p>{data.section[2].data[5].description}</p>
    
             </S.MundoItemText>
             <S.SLink to='/mundo/israel' >Acessar</S.SLink>
          </S.SectionItem>

          <S.SectionItem>
          <img src={SiriaImg} alt='Siria'/>
             <S.MundoItemText>
             
             <S.LabelImage><strong>{data.section[2].data[6].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[6].title}</h2>
             <p>{data.section[2].data[6].description}</p>
    
             </S.MundoItemText>
             <S.SLink to='/mundo/siria'>Acessar</S.SLink>
          </S.SectionItem>

          <S.SectionItem>
          <img src={ChinaImg} alt='China'/>
             <S.MundoItemText>
             
             <S.LabelImage><strong>{data.section[2].data[7].label}</strong></S.LabelImage>
             <h2>{data.section[2].data[7].title}</h2>
             <p>{data.section[2].data[7].description}</p>
    
    
             </S.MundoItemText>
             <S.SLink to='/mundo/china'>Acessar</S.SLink>
          </S.SectionItem>
          

    </S.Cards>
    <Footer />
    </S.Container>
  )
}
 