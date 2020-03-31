import React, { useEffect, useState } from "react"
import { usePlayers } from "../hooks"
import { Link } from "react-router-dom"
import { Button, ButtonGroup } from "reactstrap"
import styles from "../styles/home.css"
import Navbar from "./Navbar.js"
import Carousel from "./Carousel.js"
import Players from "./Players.js"
import Products from "./Product.js"

export default props => {
  const { get, players } = usePlayers()

  return (
    <div className="container">
      <h1>ALL SPORTS</h1>
      <Navbar />
      <Carousel />
      <h2>FEATURED LEGEND STORES</h2>
      <div className="featuredContainer">
        <Players />
      </div>
      <h1>LEGEND MARKETPLACE</h1>
      <Products />
    </div>
  )
}
