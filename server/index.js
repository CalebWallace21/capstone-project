require('dotenv').config()
const express = require(`express`)
const cors = require(`cors`)
const {sequelize} = require(`./util/database`)

const {SERVER_PORT} = process.env

const {User} = require(`./models/user`)
const {Team} = require('./models/team')
const {Roster} = require('./models/roster')
const {Champion} = require('./models/champion')
const {getChampions, selectChampion, editName, deleteChampion} = require('./controllers/championController')
const {getCurrentUserTeams, addTeam, deleteTeam} = require('./controllers/teamController')
const {getAllChampions} = require('./controllers/apiController')
const {login, register} = require('./controllers/auth')
const {isAuthenticated} = require(`./middleware/isAuthorized`)

const app = express();

app.use(express.json())
app.use(cors())

User.hasMany(Team)
Team.belongsTo(User)

Team.hasMany(Roster)
Roster.belongsTo(Team)

Roster.hasMany(Champion)
Champion.belongsTo(Roster)

app.post(`/register`, register)
app.post(`/login`, login)

app.get("/api/getChamp", getAllChampions)

app.get("/api/selectChamp", getChampions);
app.post("/api/selectChamp", selectChampion);
app.put("/api/selectChamp/:id", editName);
app.delete("/api/selectChamp/:id", deleteChampion);

app.get('/userteams/:userId', getCurrentUserTeams)
app.post(`/teams`, isAuthenticated, addTeam)
app.delete(`/teams/:id`, isAuthenticated, deleteTeam)

// sequelize.sync({ force: true })
sequelize.sync()
    .then(() => {
        app.listen(SERVER_PORT, () => console.log (`Server is up on port ${SERVER_PORT}`))
    })
    .catch(err => console.log(err))