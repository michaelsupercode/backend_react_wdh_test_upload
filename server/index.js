const express = require("express")
const cors = require("cors")

const usersArray = [
    { id: 1, name: "Wolfgang", username: "wolfy" },
    { id: 2, name: "Anna", username: "anna" },
    { id: 3, name: "Peter", username: "peter" },
]

const PORT = 9000
const app = express()

app.use(cors()) // localhost:3000   /----> localhost:9000 (unser backend) get /users
                //         |       /
                // <react frontend>

app.use(express.json()) // body parser...

app.use((req, _, next) => {
    console.log("new req –", req.method, req.url)
    next()
})

app.get("/users", (req, res) => {
    res.json(usersArray)
})

app.post("/newUser",
    // body("name"),
    (req, res) => {
        const user = req.body
        const lastId = usersArray[usersArray.length - 1] ? usersArray[usersArray.length - 1].id : 1
        const userWithId = { ...user, id: lastId + 1 } // spread operator
        
        usersArray.push(userWithId)
        res.json(usersArray)
    }
)

app.listen(PORT, () => console.log("Server listening on port", PORT))