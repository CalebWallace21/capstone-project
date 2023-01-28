const {Team} = require('../models/team')
const {User} = require(`../models/user`)

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
            const {title, content, status, userId} = req.body
            await Team.create({title, content, privateStatus: status, userId})
            res.sendStatus(200)
        }
        catch(error) {
            console.log('There is an error adding a team')
            console.log(error)
            res.sendStatus(400)
        }
    },
    deletePost: async (req, res) => {
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