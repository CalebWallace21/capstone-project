import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import {useContext} from 'react'

import Champions from './components/Champions'
import ChampSelect from './components/ChampSelect'
import EditRoster from './components/EditRoster'
import Header from './components/Header'
import LockIn from './components/LockIn'
import TeamRoster from './components/TeamRoster'

import AuthContext from './store/authContext'

const App = () => {
  const authCtx = useContext(AuthContext)
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<ChampSelect/>}/>
        <Route path='/auth' element={!authCtx.token ? <Auth/> : <Navigate to='/'/>}/>
        <Route path='/teamRoster' element={authCtx.token ? <TeamRoster/> : <Navigate to='/auth'/>}/>
      </Routes>
    </div>
  )
}

export default App
