import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import {useContext} from 'react'


import ChampSelect from './components/ChampSelect'
import Header from './components/Header'
import Profile from './components/Profile'
import Auth from './components/Auth'
import AuthContext from './store/authContext'

const App = () => {
  const authCtx = useContext(AuthContext)
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<ChampSelect/>}/>
        <Route path='/auth' element={!authCtx.token ? <Auth/> : <Navigate to='/'/>}/>
        <Route path='/profile' element={authCtx.token ? <Profile/> : <Navigate to='/auth' />}/>
      </Routes>
    </div>
  )
}

export default App
