import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/HomePage/Home'
import LoginPage from '../pages/LoginPage/index'
import Brasil from '../pages/BrasilSectionPages/BrasilPages'
import ErrorPage from '../pages/ErrorPage/index'
import Natureza from '../pages/BrasilSectionPages/Natureza/index'
import Brasilia from '../pages/BrasilSectionPages//Brasilia/index'
import Cidades from '../pages/BrasilSectionPages/Cidades/index'
import LavaJato from '../pages/BrasilSectionPages/LavaJato/index'
import EUA from '../pages/BrasilSectionPages/America/index'
import Turismo from '../pages/BrasilSectionPages/Turismo/index'
import Comercio from '../pages/BrasilSectionPages/Comercio/index'
import Violencia from '../pages/BrasilSectionPages/Violencia/index'

import Mundo from '../pages/MundoSectionPages/MundoPages'
import Feriado from '../pages/MundoSectionPages/Feriado/index'
import Agricultura from '../pages/MundoSectionPages/Agricultura/index'
import Internacional from '../pages/MundoSectionPages/Internacional/index'
import Onu from '../pages/MundoSectionPages/Onu/index'
import OrienteMedio from '../pages/MundoSectionPages/OrienteMedio/index'
import Israel from '../pages/MundoSectionPages/Israel/index'
import Siria from '../pages/MundoSectionPages/Siria/index'
import China from '../pages/MundoSectionPages/China/index'


export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/brasil' element ={<Brasil/>}/>
                <Route path='/brasil/natureza' element ={<Natureza/>}/>
                <Route path='/brasil/brasilia' element ={<Brasilia/>}/>
                <Route path='/brasil/cidades' element ={<Cidades/>}/>
                <Route path='/brasil/eua' element ={<EUA/>}/>
                <Route path='/brasil/lavajato' element ={<LavaJato/>}/>
                <Route path='/brasil/turismo' element ={<Turismo/>}/>
                <Route path='/brasil/comercio' element ={<Comercio/>}/>
                <Route path='/brasil/violencia' element ={<Violencia/>}/>

                <Route path='/mundo' element ={<Mundo/>}/>

                <Route path='/mundo/feriado' element ={<Feriado/>}/>
                <Route path='/mundo/agricultura' element ={<Agricultura/>}/>
                <Route path='/mundo/internacional' element ={<Internacional/>}/>
                <Route path='/mundo/onu' element ={<Onu/>}/>
                <Route path='/mundo/orientemedio' element ={<OrienteMedio/>}/>
                <Route path='/mundo/israel' element ={<Israel/>}/>
                <Route path='/mundo/siria' element ={<Siria/>}/>
                <Route path='/mundo/china' element ={<China/>}/>
                          
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </Router>
    )
}