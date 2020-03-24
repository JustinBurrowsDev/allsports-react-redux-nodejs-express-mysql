const express = require("express")
const playerRoutes = require("./routes/players")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", playerRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
