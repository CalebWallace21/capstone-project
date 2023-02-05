
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
                <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${team.champ1_Img}.png`} alt="champ1" />
                </div>

                <div className="saved-champ">
                <p>{team.champ2}</p>
                <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${team.champ2_Img}.png`} alt="champ2"/>
                </div>

                <div className="saved-champ">
                <p>{team.champ3}</p>
                <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${team.champ3_Img}.png`} alt="champ3" />
                </div>

                <div className="saved-champ">
                <p>{team.champ4}</p>
                <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${team.champ4_Img}.png`} alt="champ4"/>
                </div>

                <div className="saved-champ">
                <p>{team.champ5}</p>
                <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${team.champ5_Img}.png`} alt="champ5" />
                </div>
                {
                    userId === team.userId &&
                    <div>
                        <button className='auth-delete-btn' onClick={() => deleteTeam(team.id)}>
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
        <main className="no-teams">
            <h1>You have no saved teams!</h1>
        </main>
    )
}

export default Profile