import React, { useEffect, useState, useRef } from 'react'
import firebase from '../../services/firebaseConnection'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import TopoMkt from '../../htdocs/assets/media/topoLogin.gif'
import { toast } from 'react-toastify'

 

const Container = styled.section`
width: 100%;
height: 118.3vh;
display:flex;
flex-direction: column;
align-items: center;
@media only screen and (min-width: 340px) and (max-width: 800px) {
  height: 100vh;
}
`

const Header = styled.header`
text-align: center;
display: flex;
width: 66.5vw;
height: 20.5vh;
background-image: url(${TopoMkt});
background-size: cover;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 100vw;
 height: 12vh;   
 background-size: contain;
 background-repeat: no-repeat;
}

`
const BoxLogin = styled.section`
width: 23vw;
height: 55vh;
border: solid 1px;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
background-color:whitesmoke;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 80vw;
 height: 60vh;
}
p{
    font-size: 18px;
    font-weight: bolder;
}
`
const MainLogin = styled.main`
width: 66.5vw;
height:68vh;
 
display: flex;
justify-content: center;
align-items: center;
`

const Footer = styled.footer`
width: 66.5vw;
height:25vh;
border-top: solid  ;
border-bottom: solid ;
display: flex;
align-items: center;
justify-content: space-around;
@media only screen and (min-width: 360px) and (max-width: 800px) {
 width: 100vw;
}
h3{
    font-size: 13.5px;
    @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-size: 3vw;
}
}

`

const LinksFooter = styled.nav`
border-top: solid 1px;
border-bottom: solid 1px;
width: 11vw;
height: 15vh;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
  height: 20vh;
}
p{
    font-size: 13.5px;
    @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-size: 2vw;
}
}
 
`
const BoxForm = styled.div`
width: 80%;
height: 21vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
input{
    border: solid 1.6px;
    width: 80%;
    height: 3.5vh;
    font-size: 16px;
    @media only screen and (min-width: 360px) and (max-width: 800px) {
     width: 56vw;
     height: 5vh;
     font-weight: bolder;
}
}
`

const BoxBtn = styled.div`
width: 100%;
height: 6vh;
display: flex;
align-items:center;
justify-content: space-evenly;
@media only screen and (min-width: 360px) and (max-width: 800px) {
    height: 15vh;
    width: 100%;
}
button{
    border-style: none;
    background-color: black;
    font-size: 14px;
    color: white;
    width: 29%;
    height: 3vh;
    transition: all .2s ease-in-out;
    @media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 20vw;
    height: 4.5vh;
    font-size: 12px;
}
:hover{
    cursor: pointer;
    transform: scale(1.05)
}
}
`

export default function App() {


const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')

const [user, setUser] = useState(false)

const [userData, setUserData] = useState({})

const [welcome, setWelcome] =  useState('')
const refInput = useRef()

 
  const Cadastro = async () =>{
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(async(value) =>{
        
        await firebase.firestore().collection('users')
        .doc(value.user.uid)
        .set({
          nome: nome,
        })
        .then(() =>{
          console.log(value)

          setEmail('')
          setNome('')
          setSenha('')
          alert('Cadastrado no banco de dados')
          setWelcome(() =>{
            return <p>Olá {nome}, <Link to='/home'>clique aqui</Link> para acessar </p>
          })

        })
    }).catch((error) =>{
       if(error.code === 'auth/weak-password'){
        alert('Insira uma senha mais forte')
       }else if(error.code === 'auth/email-already-in-use' || 'auth/invalid-email'){
        alert('Email já em uso ou dados incorretos')
       }
    })

  }

  ///// LOGOUT

  const Logout = async ()=>{
    await firebase.auth().signOut()
    toast.success('Deslogado')  
    setEmail('')
    setNome('')
    setSenha('')
  }

  const Login = async ()=>{
    if(nome ===''){
        alert('Por favor preencha todos os dados')
        refInput.current.style.borderDolor = 'red'
    }
    await firebase.auth().signInWithEmailAndPassword(email,senha)
    .then( async (value) =>{
      
        await firebase.firestore().collection('users')
        .doc(value.user.uid)
        .get()
        .then((snapshot) =>{
          setUserData({
            nome: snapshot.data().nome,
            email: value.user.email
          })
          
          setEmail('')
          setNome('')
          setSenha('')
          setWelcome(() =>{
            return  <p>Olá {nome}, <Link to='/home'>clique aqui</Link> para acessar </p>
          })
        }).catch((error) =>{
          console.log('Erro no login' + error)
          if(error.code === 'auth/user-not-found' )
          toast.warn('Usuário não encontrado')
        })
    })

    if(!userData) {
      toast.warn('Usuário não cadastrado')
    }
  }


  useEffect(() =>{
    const loginCheck = async () =>{
      await firebase.auth().onAuthStateChanged((user) =>{    
        if(user){
          setUser(true)
        }else{
          setUser(false)
        }
         
      })
    }

    loginCheck()
  } , [])
  
  return (
    <Container>
        <Header>
        </Header>
        <MainLogin>
      <BoxLogin>
        <h2>🔒 Área restrita</h2>
        <BoxForm>
        <input ref={refInput} type='text' placeholder='nome' value={nome} onChange={e => setNome(e.target.value)}/>
        <input ref={refInput} type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
        <input ref={refInput} type='password' placeholder='senha' value={senha} onChange={e => setSenha(e.target.value)}/>
        </BoxForm>
        {user && <p>{welcome}</p>}  
        <BoxBtn>
        <button onClick={() =>{Login()}}>Login</button>
        <button onClick={() =>{Cadastro()}}>Novo usuário</button>
        {user && <button onClick={() =>{Logout()}}>Logout</button>}
        </BoxBtn>
      </BoxLogin>
      </MainLogin>
      
      {/* <div>
        {Object.keys(userData).length > 0 && (
          <h1>Muito bom te ver de volta {userData.nome}</h1>
        
        )}
      </div> */}
      <Footer>
        
        <LinksFooter>  
          <h3>InfoGlobo</h3>
          <p>Sobre o Site</p>
          <p>Sobre a InfoGlobo</p>
          <p>Atendimento Comercial e Representantes</p>
          <p>Trabalhe Conosco</p>
        </LinksFooter>
        
        <LinksFooter>
        <h3>Nossos Produtos</h3>
          <p>Pesquise por Perfil de Leitores</p>
          <p>Todos os Produtos</p>
          <p>Circulação</p>
          <p>Audiência</p>
        </LinksFooter>
        

        <LinksFooter>
        <h3>Dúvidas</h3>
          <p>Fale Conosco</p>
          <p>Perguntas Freqüentes</p>
          <p>Manuais</p>
          <p>Formas de Pagamento</p>
        </LinksFooter>
        
        <LinksFooter>
        <h3>Veja Também</h3>
          <p>Notícias</p>
          <p>Tabelas</p>
          <p>Versão do site - 1.21.08.20.1</p> 
        </LinksFooter>
      </Footer>
    </Container>
  )
}
