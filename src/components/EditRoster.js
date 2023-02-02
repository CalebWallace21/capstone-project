import {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import ChampSelect from './ChampSelect'
import '../App.css';

const EditRoster = ({champions, editName, deleteChampion}) => {
    const [nameInput, setNameInput] = useState('')
    
    
    return(
        <div className="edit-buttons">
        {/* <button className="delete-button" onClick={() => deleteChampion(champions.id)}>Delete</button> */}
        </div>
    )
}

export default EditRoster 