
import {useContext, useEffect, useState, useCallback} from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'
import '../App.css';

const Profile = () => {
    const {userId, token} = useContext(AuthContext)
    const [teams, setTeams] = useState([])

    const getUserTeams = useCallback(() => {
        axios.get(`/userteams/${userId}`)
            .then(res => setTeams(res.data))
            .catch(err => console.log(err))
    }, [userId])

    useEffect(() => {
        getUserTeams()
    }, [getUserTeams])

    const deleteTeam = id => {
        axios.delete(`/teams/${id}`, {
            headers: {
                authorization: token
            }
        })
            .then(() => {
                getUserTeams()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const mappedTeams = teams.map(team => {
        return (
            <div key={team.id} className='team-card'>
                <div className="saved-team">
                
                <h2>Team: {team.id}</h2>

                <div className="saved-champ">
                <p>{team.champ1}</p>
                <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${team.champ1_Img}.png`} />
                </div>

                <div className="saved-champ">
                <p>{team.champ2}</p>
                <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${team.champ2_Img}.png`} />
                </div>

                <div className="saved-champ">
                <p>{team.champ3}</p>
                <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${team.champ3_Img}.png`} />
                </div>

                <div className="saved-champ">
                <p>{team.champ4}</p>
                <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${team.champ4_Img}.png`} />
                </div>

                <div className="saved-champ">
                <p>{team.champ5}</p>
                <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${team.champ5_Img}.png`} />
                </div>
                {
                    userId === team.userId &&
                    <div>
                        <button className='form-btn' onClick={() => deleteTeam(team.id)}>
                            Delete Team
                        </button>
                    </div>
                }
                
                </div>

            </div>
        )
    })
    return mappedTeams.length >= 1 ? (
        <main>
            {mappedTeams}
        </main>
    ) : (
        <main>
            <h1>You have no teams!</h1>
        </main>
    )
}

export default Profile