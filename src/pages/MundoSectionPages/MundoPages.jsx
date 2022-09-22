import React from 'react'
import Footer from '../../services/Footer/index'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import data from '../../data/data.json'
import FeriadoImg from '../../htdocs/assets/media/216x121-9.jpeg'
import AgroImg from '../../htdocs/assets/media/216x121-11.jpeg'
import InterImg from '../../htdocs/assets/media/216x121-7.jpeg'
import OnuImg from '../../htdocs/assets/media/216x121-5.jpeg'
import OrienteMedioImg from '../../htdocs/assets/media/216x121-orientemedio.jpg'
import IsraelImg from '../../htdocs/assets/media/216x121-israel.jpg'
import SiriaImg from '../../htdocs/assets/media/216x121-siria.jpg'
import ChinaImg from '../../htdocs/assets/media/216x121-china.jpg'


const Container = styled.main`
width: 100%;
background-color: #E0EEEE;
`
const Cards = styled.section`
width: 100%;
height: 120vh;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
height: 470vh;
    
}
`

const Title = styled.div`
border-bottom: solid #FFD700;
width: 17%;
font-size: 20px;
display: flex;
justify-content: center;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 50vw;
 h1{
   font-weight: bolder;
   color:#064960
 }
} 
`

const SectionItem = styled.div`
width:22vw;
height: 52vh;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
:hover{
   border-top: solid 1px;
   border-bottom: solid 1px;
}
img{
  width: 20.6vw;
  object-fit: contain;
  transition: all 0.5s ease-in-out;
  :hover{
    cursor: pointer;
    transform: scale(1.02);
  
  }
@media only screen and (min-width: 360px) and (max-width: 800px) {
 
width: 80vw; 
 
} 
  }

@media only screen and (min-width: 360px) and (max-width: 800px) {
 
width: 90vw;
border-bottom:solid 1px ;
}  
`

const MundoItemText = styled.div`
display: flex;
height: 19vh;
width: 20.7vw;
flex-direction: column;
justify-content: space-evenly;
p{
  font-size: 1.2vw;
  
}
h2{
font-size: 1.4vw;
line-height:21px;
font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";;
}
@media only screen and (min-width: 360px) and (max-width: 800px) {
 
width: 70vw;
display: flex;
height: 20vh;
justify-content: space-evenly;
align-items: center;
h2{
   font-size: 5.4vw;
}
p{
   font-size: 3.8vw;
}
 
} 
`

const LabelImage = styled.label`
color: #064960;
text-transform: uppercase;
font-size: 0.8vw;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 font-size: 4vw;
} 
`

const SLink = styled(Link)`
text-decoration: none;
width: 10vw;
height: 4vh;
display: flex;
justify-content: center;
align-items: center;
background: black;
font-size: 1.1vw;
font-weight: bolder;
color: #fff;
border: 1px solid #eee;
border-radius: 20px;
box-shadow: 5px 5px 5px #eee;
text-shadow: none;
transition: 1s;
:hover{
background: #FFD700;
color: black;
border: 1px solid #eee;
border-radius: 20px;
box-shadow: 5px 5px 5px #eee;
text-shadow: none;
}
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 50vw;
 height: 6vh;
 font-size: 4.5vw;
 background-color: #FFD700;
 margin-bottom: 1.5%;
} 
`


export default function BrasilPages() {
  return (
   <Container>
    <Title>
      <Link style={{textDecoration: 'none', color:'black'}} to='/home'><h1>Home +</h1> </Link>
    </Title>
    <Cards> 
        <SectionItem>
        <img src={FeriadoImg} alt='Árvores no outono'/>
             <MundoItemText>

             <LabelImage><strong>{data.section[1].data[2].label}</strong></LabelImage>
             <h2>{data.section[1].data[2].title}</h2>
             <p>{data.section[1].data[2].description}</p>
    
             </MundoItemText>
             <SLink to='/mundo/feriado'>Acessar</SLink>
          </SectionItem>
          <SectionItem>
          <img src={AgroImg} alt='Árvore em dia de sol'/>
             <MundoItemText>
             
             <LabelImage><strong>{data.section[1].data[3].label}</strong></LabelImage>
             <h2>{data.section[1].data[3].title}</h2>
             <p>{data.section[1].data[3].description}</p>
    
             </MundoItemText>
             <SLink to='/mundo/agricultura'>Acessar</SLink>
          </SectionItem>
          <SectionItem>
          <img src={InterImg} alt='Prédios'/>
             <MundoItemText>
             
             <LabelImage><strong>{data.section[2].data[2].label}</strong></LabelImage>
             <h2>{data.section[2].data[2].title}</h2>
             <p>{data.section[2].data[2].description}</p>
    
             </MundoItemText>
             <SLink to='/mundo/internacional'>Acessar</SLink>
          </SectionItem>
          <SectionItem>
          <img src={OnuImg} alt='Arco histórico'/>
             <MundoItemText>
             
             <LabelImage><strong>{data.section[2].data[3].label}</strong></LabelImage>
             <h2>{data.section[2].data[3].title}</h2>
             <p>{data.section[2].data[3].description}</p>
    
             </MundoItemText>
             <SLink to='/mundo/onu'>Onu</SLink>
          </SectionItem>
 
          <SectionItem>
          <img src={OrienteMedioImg} alt='Oriente Médio'/>
             <MundoItemText>
             
             <LabelImage><strong>{data.section[2].data[4].label}</strong></LabelImage>
             <h2>{data.section[2].data[3].title}</h2>
             <p>{data.section[2].data[3].description}</p>
    
    
             </MundoItemText>
             <SLink to='/mundo/orientemedio'>Acessar</SLink>
          </SectionItem>

          <SectionItem>
          <img src={IsraelImg} alt='Israel'/>
             <MundoItemText>
             
             <LabelImage><strong>{data.section[2].data[5].label}</strong></LabelImage>
             <h2>{data.section[2].data[5].title}</h2>
             <p>{data.section[2].data[5].description}</p>
    
             </MundoItemText>
             <SLink to='/mundo/israel' >Acessar</SLink>
          </SectionItem>

          <SectionItem>
          <img src={SiriaImg} alt='Siria'/>
             <MundoItemText>
             
             <LabelImage><strong>{data.section[2].data[6].label}</strong></LabelImage>
             <h2>{data.section[2].data[6].title}</h2>
             <p>{data.section[2].data[6].description}</p>
    
             </MundoItemText>
             <SLink to='/mundo/siria'>Acessar</SLink>
          </SectionItem>

          <SectionItem>
          <img src={ChinaImg} alt='China'/>
             <MundoItemText>
             
             <LabelImage><strong>{data.section[2].data[7].label}</strong></LabelImage>
             <h2>{data.section[2].data[7].title}</h2>
             <p>{data.section[2].data[7].description}</p>
    
    
             </MundoItemText>
             <SLink to='/mundo/china'>Acessar</SLink>
          </SectionItem>
          

    </Cards>
    <Footer />
    </Container>
  )
}
 