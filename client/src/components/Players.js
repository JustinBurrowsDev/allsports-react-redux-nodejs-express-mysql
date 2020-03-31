import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { usePlayers } from "../hooks"
import styles from "../styles/players.css"

console.log(usePlayers)
export default props => {
  const { players } = usePlayers()

  return (
    <div className="player">
      <div className="athleteContainer">
        <div className="athletes">
          {players.map(player => (
            <div className="player" key={player.id}>
              <img src={player.img} />
              <Link className="productTitle" to={"/player/" + player.id}>
                {player.firstname} {player.lastname}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
