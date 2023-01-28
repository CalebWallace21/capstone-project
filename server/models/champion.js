const {DataTypes} = require(`sequelize`)
const {sequelize} = require(`../util/database`)

module.exports = {
    Champion: sequelize.define(`champion`, {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        img: DataTypes.STRING
    })
}