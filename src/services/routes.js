import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/HomePage/Home'
import LoginPage from '../pages/LoginPage/index'

import ErrorPage from '../pages/ErrorPage/index'
export default function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/home' element={<Home/>}/>

                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </Router>
    )
}