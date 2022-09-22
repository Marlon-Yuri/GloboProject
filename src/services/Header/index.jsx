import React from 'react'
import Menu from './Menu/menu'
import * as S from '../../htdocs/style/headerStyle'
export default function Header() {
  return (
    <S.Container>
       <Menu/>
       <S.Title>
         <h1>INFOGLOBO</h1>
        <S.SquareBox>
          <div></div>
          <div></div>
        </S.SquareBox>
       </S.Title>
       
    </S.Container>
  )
}
