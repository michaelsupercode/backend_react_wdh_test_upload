const express = require("express")
const cors = require("cors")

const usersArray = [
    { id: 1, name: "Wolfgang", username: "wolfy" },
    { id: 2, name: "Anna", username: "anna" },
    { id: 3, name: "Peter", username: "peter" },
]

const getUsersNewestFirst = () => [...usersArray].sort((a, b) => b.id - a.id)

const PORT = 9000
const app = express()

app.use(cors()) 

app.use(express.json()) 

app.use((req, _, next) => {
    console.log("new req –", req.method, req.url)
    next()
})
app.get("/", (req, res) => {
    res.send("<h6>..it works so entirely very well..:</h6>")
})
app.get("/users", (req, res) => {
    res.json(getUsersNewestFirst())
})

app.post("/newUser",
    (req, res) => {
        const user = req.body
        const maxId = usersArray.reduce((max, currentUser) => Math.max(max, currentUser.id), 0)
        const userWithId = {...user, id: maxId + 1 } 

        usersArray.push(userWithId)
        res.json(getUsersNewestFirst())
    }
)

app.listen(PORT, () => console.log("Server listening on port", PORT))