const axios = require('axios');

module.exports = {
    getAllChampions: (req, res) => {
        const arr = [];
        axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
        .then(response => {                     
            axios.get(`https://ddragon.leagueoflegends.com/cdn/${response.data[0]}/data/en_US/championFull.json`)
            .then(response => {
                const champArr = Object.values(response.data.data);  
                              
                for (let i = 0; i < champArr.length; i++) {
                    arr.push(champArr[i])                  
                }

                res.status(200).send((arr));                
            }) .catch(error => res.status(500).send(error));
        })
        .catch(error => res.status(500).send(error));
    }
    }
