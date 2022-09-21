import React from 'react'
import Footer from '../../services/Footer/index'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import data from '../../data/data.json'
import NatureImg from '../../htdocs/assets/media/216x121-8.jpeg'
import StreetImg from '../../htdocs/assets/media/216x121-12.jpeg'
import EuaImg from '../../htdocs/assets/media/216x121-6.jpeg'
import SeaImg from '../../htdocs/assets/media/216x121-10.jpeg'
import BrasilImg from '../../htdocs/assets/media/216x121-brasília.webp'
import LavaJaImg from '../../htdocs/assets/media/216x121-lava-jato.jpg'
import ComercioImg from '../../htdocs/assets/media/216x121-comercio.jpg'
import ViolImg from '../../htdocs/assets/media/216x121-violencia.jpg'


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
`

const Title = styled.div`
border-bottom: solid #FFD700;
width: 17%;
font-size: 20px;
display: flex;
justify-content: center;
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
  }
`

const BrasilItemText = styled.div`
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
`

const LabelImage = styled.label`
color: #064960;
text-transform: uppercase;
font-size: 0.8vw;
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
`


export default function BrasilPages() {
  return (
   <Container>
    <Title>
      <Link style={{textDecoration: 'none', color:'black'}} to='/home'><h1>Home +</h1> </Link>
    </Title>
    <Cards> 
        <SectionItem>
             <img src={NatureImg} alt=''/>
             <BrasilItemText>

             <LabelImage><strong>{data.section[1].data[0].label}</strong></LabelImage>
             <h2>{data.section[1].data[0].title}</h2>
             <p>{data.section[1].data[0].description}</p>
    
             </BrasilItemText>
             <SLink to='/brasil/natureza'>Natureza</SLink>
          </SectionItem>
          <SectionItem>
             <img src={StreetImg} alt=''/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[1].data[1].label}</strong></LabelImage>
             <h2>{data.section[1].data[1].title}</h2>
             <p>{data.section[1].data[1].description}</p>
    
             </BrasilItemText>
             <SLink to='/brasil/cidades'>Cidades</SLink>
          </SectionItem>
          <SectionItem>
             <img src={EuaImg} alt=''/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[2].data[0].label}</strong></LabelImage>
             <h2>{data.section[2].data[0].title}</h2>
             <p>{data.section[2].data[0].description}</p>
    
             </BrasilItemText>
             <SLink to='/brasil/eua'>EUA</SLink>
          </SectionItem>
          <SectionItem>
             <img src={SeaImg} alt=''/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[2].data[1].label}</strong></LabelImage>
             <h2>{data.section[2].data[1].title}</h2>
             <p>{data.section[2].data[1].description}</p>
    
             </BrasilItemText>
             <SLink to='/brasil/turismo'>Turismo</SLink>
          </SectionItem>
 
          <SectionItem>
             <img src={BrasilImg} alt='Brasília'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[1].data[4].label}</strong></LabelImage>
             <h2>{data.section[1].data[4].title}</h2>
             <p>{data.section[1].data[4].description}</p>
    
             </BrasilItemText>
             <SLink to='/brasil/brasilia'>Brasilia</SLink>
          </SectionItem>

          <SectionItem>
             <img src={LavaJaImg} alt='Operação Lava-a-jato'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[1].data[5].label}</strong></LabelImage>
             <h2>{data.section[1].data[5].title}</h2>
             <p>{data.section[1].data[5].description}</p>
    
             </BrasilItemText>
             <SLink to='/brasil/lavajato'>Lava a jato</SLink>
          </SectionItem>

          <SectionItem>
             <img src={ComercioImg} alt='Imagem de comércio'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[1].data[6].label}</strong></LabelImage>
             <h2>{data.section[1].data[6].title}</h2>
             <p>{data.section[1].data[6].description}</p>
    
             </BrasilItemText>
             <SLink to='/brasil/comercio'>Comercio</SLink>
          </SectionItem>

          <SectionItem>
             <img src={ViolImg} alt='Diga não a violência'/>
             <BrasilItemText>
             
             <LabelImage><strong>{data.section[1].data[7].label}</strong></LabelImage>
             <h2>{data.section[1].data[7].title}</h2>
             <p>{data.section[1].data[7].description}</p>
    
             </BrasilItemText>
             <SLink to='/brasil/violencia'>Denuncie violencia</SLink>
          </SectionItem>
          


    </Cards>
    <Footer/>
    </Container>
  )
}
 