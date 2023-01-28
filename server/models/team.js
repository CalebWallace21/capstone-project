const {DataTypes} = require(`sequelize`)
const {sequelize} = require(`../util/database`)

module.exports = {
    Team: sequelize.define(`team`, {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        
    })
}