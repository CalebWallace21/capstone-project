const {Team} = require('../models/team')
const {User} = require(`../models/user`)
let id = 1

module.exports = {
    getCurrentUserTeams: async (req, res) => {
        try {
            const {userId} = req.params
            const teams = await Team.findAll({
                where: {userId: userId},
                include: [{
                    model: User,
                    required: true,
                    attributes: [`username`]
                }]
            })
            res.status(200).send(teams)
        } catch (error) {
            console.log('ERROR IN currentUserTeams')
            console.log(error)
            res.sendStatus(400)
        }
    },

    addTeam: async (req, res) => {
        try {            
            const {champions, userId} = req.body            
            const champsArray = []
            const champKeyArray = []
            console.log(champions.champions[0])
            champions.champions.forEach(champ => {
                champsArray.push(champ.name)
                champKeyArray.push(champ.key)

            })
            const champ1 = champsArray[0]
            const champ2 = champsArray[1]
            const champ3 = champsArray[2]
            const champ4 = champsArray[3]
            const champ5 = champsArray[4]
            const champ1_Img = champKeyArray[0]
            const champ2_Img = champKeyArray[1]
            const champ3_Img = champKeyArray[2]
            const champ4_Img = champKeyArray[3]
            const champ5_Img = champKeyArray[4]
            await Team.create({champ1, champ2, champ3, champ4, champ5, champ1_Img, champ2_Img, champ3_Img, champ4_Img, champ5_Img, userId})
            res.sendStatus(200)
        }
        catch(error) {
            console.log('There is an error adding a team')
            console.log(error)
            res.sendStatus(400)
        }
    },
    deleteTeam: async (req, res) => {
        try {
            const {id} = req.params
            
            await Team.destroy({where: {id: +id}})
            res.sendStatus(200)
        }
        catch (error) {
            console.log('There is an error deleting a team')
            console.log(error)
            res.sendStatus(400)
        }
    }
}