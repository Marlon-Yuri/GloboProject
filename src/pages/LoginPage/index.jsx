import React, { useEffect, useState, useRef } from 'react'
import firebase from '../../services/firebaseConnection'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import * as S from '../../htdocs/style/loginStyle'
 


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
    <S.Container>
        <S.Header>
        </S.Header>
        <S.MainLogin>
      <S.BoxLogin>
        <h2>🔒 Área restrita</h2>
        <S.BoxForm>
        <input ref={refInput} type='text' placeholder='nome' value={nome} onChange={e => setNome(e.target.value)}/>
        <input ref={refInput} type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
        <input ref={refInput} type='password' placeholder='senha' value={senha} onChange={e => setSenha(e.target.value)}/>
        </S.BoxForm>
        {user && <p>{welcome}</p>}  
        <S.BoxBtn>
        <button onClick={() =>{Login()}}>Login</button>
        <button onClick={() =>{Cadastro()}}>Novo usuário</button>
        {user && <button onClick={() =>{Logout()}}>Logout</button>}
        </S.BoxBtn>
      </S.BoxLogin>
      </S.MainLogin>
      
      {/* <div>
        {Object.keys(userData).length > 0 && (
          <h1>Muito bom te ver de volta {userData.nome}</h1>
        
        )}
      </div> */}
      <S.Footer>
        
        <S.LinksFooter>  
          <h3>InfoGlobo</h3>
          <p>Sobre o Site</p>
          <p>Sobre a InfoGlobo</p>
          <p>Atendimento Comercial e Representantes</p>
          <p>Trabalhe Conosco</p>
        </S.LinksFooter>
        
        <S.LinksFooter>
        <h3>Nossos Produtos</h3>
          <p>Pesquise por Perfil de Leitores</p>
          <p>Todos os Produtos</p>
          <p>Circulação</p>
          <p>Audiência</p>
        </S.LinksFooter>
        

        <S.LinksFooter>
        <h3>Dúvidas</h3>
          <p>Fale Conosco</p>
          <p>Perguntas Freqüentes</p>
          <p>Manuais</p>
          <p>Formas de Pagamento</p>
        </S.LinksFooter>
        
        <S.LinksFooter>
        <h3>Veja Também</h3>
          <p>Notícias</p>
          <p>Tabelas</p>
          <p>Versão do site - 1.21.08.20.1</p> 
        </S.LinksFooter>
      </S.Footer>
    </S.Container>
  )
}
