import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
    const [register, setRegister] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    

   const authCtx = useContext(AuthContext)
 
   const submitHandler = e => {
       e.preventDefault()

        const body = {
            username,
            password
        }

        axios.post(register ? `/register` : `/login`, body)
        .then((res) => {
            authCtx.login(res.data.token, res.data.exp, res.data.userId)
            console.log('AFTER AUTH', res.data)
        })
        .catch(err => {
            toast.error(err.response.data)
            setPassword('')
            setUsername('')
        }) 
   }
 
   return (
       <main className ="auth-page">
           <h1 className="auth-title">Greetings Summoner!</h1>
           <h1 className="auth-title">Register or Sign in Below</h1>
           <form className='form auth-form' onSubmit={submitHandler}>
               <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={elem => setUsername(elem.target.value)}
                    className='form-input'
                />

               <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={elem => setPassword(elem.target.value)}
                    className='form-input'
                />

               <button className='form-btn'>
                   {register ? 'Sign Up' : 'Login'}
               </button>
           </form>
           <button className='form-btn' onClick={() => setRegister(!register)}>Need to {register ? 'Login' : 'Sign Up'}?</button>
           
      <ToastContainer position="top-center" />
       </main>
   )
}
 
export default Auth