import React from 'react'
import data from '../../../data/data.json'
import * as S from '../../../htdocs/style/homeMainStyle'
import ImageBrasil from '../../../htdocs/assets/media/464x261-1.jpeg'
import ImageModa from '../../../htdocs/assets/media/464x261-2.jpeg'
import ImageComportamento from '../../../htdocs/assets/media/216x216-1.jpeg'
import ImageEstilo from '../../../htdocs/assets/media/216x216-2.jpeg'
import ImageRural from '../../../htdocs/assets/media/216x121-1.jpeg'
import ImageRun from '../../../htdocs/assets/media/216x121-2.jpeg'
import ImageEducation from '../../../htdocs/assets/media/216x121-3.jpeg'
import ImageEco from '../../../htdocs/assets/media/216x121-4.jpeg'
import {ImShare} from 'react-icons/im'


export default function Main() {


console.log(data.section[1])

  return (
    <S.Container>
      <S.ImageBox>
        <S.BoxMain1>
           <img src={ImageBrasil} alt='Jogo de críquete'/>
           <S.Icon>
           <a href="#brasil"><ImShare color='white' size={33}/></a> 
           </S.Icon>
           
           <S.BoxText>
             <p>{data.section[0].data[0].label}</p>
             <h3>{data.section[0].data[0].title}</h3>
             <p>{data.section[0].data[0].description}</p>
           </S.BoxText>      
        </S.BoxMain1>
        <S.BoxMain1>
           <img src={ImageModa} alt='Desfile de moda'/>
           <S.Icon>
           <a href="#moda"><ImShare color='white' size={33}/></a> 
           </S.Icon>
           <S.BoxText>
             <p>{data.section[0].data[1].label}</p>
             <h3>{data.section[0].data[1].title}</h3>
             <p>{data.section[0].data[1].description}</p>
           </S.BoxText>
        </S.BoxMain1>  
      </S.ImageBox>  
       <S.ImageBox2>
       <S.BoxMain2>
           <img src={ImageComportamento} alt='Casal'/>
           <S.BoxText2>
             <S.LabelImage><strong>{data.section[0].data[2].label}</strong></S.LabelImage>
             <h3>{data.section[0].data[2].title}</h3>
             <p>{data.section[0].data[2].description}</p>
             <S.IconTwo>
           <a href="#comportamento"><ImShare color='black' size={33}/></a> 
           </S.IconTwo>
           </S.BoxText2>      
        </S.BoxMain2>
        <S.BoxMain2>
           <img src={ImageEstilo} alt='Mulher na janela'/>
           <S.BoxText2>
             <S.LabelImage><strong>{data.section[0].data[3].label}</strong></S.LabelImage>
             <h3>{data.section[0].data[3].title}</h3>
             <p>{data.section[0].data[3].description}</p>
             <S.IconTwo>
           <a href="#estilo"><ImShare color='black' size={33}/></a> 
           </S.IconTwo>
           </S.BoxText2>      
        </S.BoxMain2>
       </S.ImageBox2>
       <S.ImageBoxFileira>
       <S.BoxMain3>
           <img src={ImageRural} alt='Foto de porco'/>
           <S.BoxText3>
             <S.LabelImageFila><strong>{data.section[0].data[4].label}</strong></S.LabelImageFila>
             <h3>{data.section[0].data[4].title}</h3>
             <p>{data.section[0].data[4].description}</p>
             <S.IconFila>
            <a href="#rural"><ImShare color='black' size={33}/></a> 
           </S.IconFila>
           </S.BoxText3>      
        </S.BoxMain3>
        <S.BoxMain3>
           <img src={ImageRun} alt='Corrida feminina'/>
           <S.BoxText3>
             <S.LabelImageFila><strong>{data.section[0].data[5].label}</strong></S.LabelImageFila>
             <h3>{data.section[0].data[5].title}</h3>
             <p>{data.section[0].data[5].description}</p>
             <S.IconFila>
           <a href="#rio2016"><ImShare color='black' size={33}/></a> 
           </S.IconFila>
           </S.BoxText3>      
        </S.BoxMain3>
        <S.BoxMain3>
           <img src={ImageEducation} alt='Imagem de criançã'/>
           <S.BoxText3>
             <S.LabelImageFila><strong>{data.section[0].data[6].label}</strong></S.LabelImageFila>
             <h3>{data.section[0].data[6].title}</h3>
             <p>{data.section[0].data[6].description}</p>
             <S.IconFila>
           <a href="#education"><ImShare color='black' size={33}/></a> 
           </S.IconFila>
           </S.BoxText3>      
        </S.BoxMain3>
        <S.BoxMain3>
           <img src={ImageEco} alt='Imagem de orquídia'/>
           <S.BoxText3>
             <S.LabelImageFila><strong>{data.section[0].data[7].label}</strong></S.LabelImageFila>
             <h3>{data.section[0].data[7].title}</h3>
             <p>{data.section[0].data[7].description}</p>
             <S.IconFila>
           <a href="#eco"><ImShare color='black' size={33}/></a> 
           </S.IconFila>
           </S.BoxText3>      
        </S.BoxMain3>
       </S.ImageBoxFileira>
       <S.Propaganda>
         <S.BoxPropaganda>
          <p>Advertising 320x100</p>
         </S.BoxPropaganda>
       </S.Propaganda>
     </S.Container>
  )
}
