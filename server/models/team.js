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
        champ1: DataTypes.STRING,
        champ2: DataTypes.STRING,
        champ3: DataTypes.STRING,
        champ4: DataTypes.STRING,
        champ5: DataTypes.STRING,
        champ1_Img: DataTypes.STRING,
        champ2_Img: DataTypes.STRING,
        champ3_Img: DataTypes.STRING,
        champ4_Img: DataTypes.STRING,
        champ5_Img: DataTypes.STRING,
    })
}