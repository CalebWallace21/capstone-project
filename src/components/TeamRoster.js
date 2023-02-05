
import EditRoster from './EditRoster'
import '../App.css';

const TeamRoster = ({champions, editName, deleteChampion}) => {

    const mapChampions = champions.map((champion, i) => {
        return (
        <div key ={i}>
        
        <EditRoster
        champions={champions}
        deleteChampion={deleteChampion}
        editName={editName}
         />
         </div>
        )
    })
    return(
        <div>
            <div className='roster-full'>
                {champions.length === 5 && (
                <h1>Roster is full <br /></h1>
            )}
            </div>
            <h1 className="banner">Current Team</h1>
            <div className='team-roster'>                
                {mapChampions}
            </div>
        </div>
    )
}

export default TeamRoster