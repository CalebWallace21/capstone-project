let champions = [];
let champid = 0;

module.exports = {
    getChampions: (req, res) => {
        res.status(200).send(champions)
    },
    selectChampion: (req, res) => {
        const champion = req.body;
        champion.id=champid;
        if(champid < 4){
        champid++
        }
        else {
            champid--
        }
        
        if(champions.length < 5){
            champions.push(champion);
            res.status(200).send(champions)
        }
        else {
            res.status(500).send(champions)
        }
        
    },
    editName: (req, res) => {
        const {id} = req.params;
        const {name} = req.body;

        const champion = champions.find(e => e.id == id);
        champion.name = name;

        res.status(200).send(champions)
    },
    deleteChampion: (req, res) => {
        const {id} = req.params
        champions.splice(id, 1)
        res.status(200).send(champions)
    }
}