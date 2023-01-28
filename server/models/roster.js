const {DataTypes} = require(`sequelize`)
const {sequelize} = require(`../util/database`)


module.exports = {
    Roster: sequelize.define(`roster`, {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }

    })
}