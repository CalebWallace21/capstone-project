import {useState, useContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import AuthContext from '../store/authContext'

const AddTeam = (champions) => {
    const {token, userId} = useContext(AuthContext)
    const navigate = useNavigate()

    console.log(champions)
    
    const handleSubmit = () => {
        axios.post('/teams', {champions, userId}, {
            headers: {
                authorization: token
            }
        })
        .then(() => {
            // console.log(name)
            navigate('/profile')
        })
        .catch(err => console.log(err))
    }


    return (
        <button className='save-team' onClick={() => handleSubmit()}>Save Team</button>
    )
}

export default AddTeam