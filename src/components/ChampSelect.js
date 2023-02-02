import {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import TeamRoster from './TeamRoster'
import AddTeam from './AddTeam'
import '../App.css';

const ChampSelect = (props) => {
    const [champions, setChampions] = useState([])
    const [championChoice, setChampionChoice] = useState([])


    

    useEffect(() => {
        axios.get('/api/getChamp')
        .then(res => {
            setChampionChoice(res.data)
        })
        .catch(error => console.log(error))
    }, [])


    const selectChampion = (champion) => {
        axios.post('api/selectChamp', champion)
        .then (res => {
            setChampions(res.data)
        })
        .catch(error => console.log(error))
      }


    // const editName = (id, name) => {
    //     let body = {name};
    
    //     axios.put(`/api/selectChamp/${id}`, body)
    //       .then(res => {
    //         setChampions(res.data)
    //         console.log(res.data)
    //       })
    //       .catch(error => console.log(error))
    //   }
    
      const deleteChampion = (id) => {
        axios.delete(`/api/selectChamp/${id}`)
          .then(res => {
            console.log(res.data)
            setChampions(res.data)
            
          })
          .catch(error => console.log(error))
      }

    return(
        <div className="champions">
            
            {championChoice.map(champ => (
                <div className="champ-choice" key={champ.id}>
                    <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ.key}.png`} onClick={() => {
                        if(champions.length !==5) {
                            setChampions (prevArray => [...prevArray, champ])
                            selectChampion(champ)
                            
                        }
                    }}  />
                </div>
            ))}
            
            <section>
            <div>
            <TeamRoster
             champions={champions}
            //  editName={editName}
             deleteChampion={deleteChampion} />
             </div>
            <div className='champion-roster'>

                {champions.map((champ, i) => (
                    <div className="roster-img">
                        <div>
                            <button
                            onClick={() => {console.log(champ.id); deleteChampion(i)}}
                            >Delete</button>
                        </div>
                    {champ.name}
                    <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champ.key}.png`} />
                    </div>
                ))}
            </div>
            </section>
            <AddTeam 
            champions={champions}/>
    </div>
    )
}

export default ChampSelect