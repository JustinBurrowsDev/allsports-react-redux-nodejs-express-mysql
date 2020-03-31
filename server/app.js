const express = require("express")
//routes the player
const playerRoutes = require("./routes/players")
//route for the products
const productRoutes = require("./routes/products")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", playerRoutes)

app.use("/api", productRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
