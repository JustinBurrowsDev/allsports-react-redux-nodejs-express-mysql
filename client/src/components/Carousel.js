import React from "react"
import { UncontrolledCarousel } from "reactstrap"

const items = [
  {
    src: "https://www.nba.com/lakers/sites/lakers/files/kb_games_mia2.jpg",
    altText: "Slide 1",
    caption: "",
    header: "GAMES ARE WON AND LOST.",
    key: "1"
  },
  {
    src:
      "https://cdn.vox-cdn.com/thumbor/RTNbGYVvEJZFL59igiV2Yc4T0u8=/0x60:2974x1982/1200x800/filters:focal(1250x754:1724x1228)/cdn.vox-cdn.com/uploads/chorus_image/image/59665171/900104606.jpg.0.jpg",
    altText: "Slide 2",
    caption: "",
    header: "PLAYERS COME AND GO.",
    key: "2"
  },
  {
    src:
      "https://cdn.vox-cdn.com/thumbor/PEkZK4G3bSiWrMEbKlvVGeqmPBk=/0x110:2667x1888/1200x800/filters:focal(0x110:2667x1888)/cdn.vox-cdn.com/uploads/chorus_image/image/10884737/165287122.0.jpg",
    altText: "Slide 3",
    caption: "",
    header: "BUT LEGENDS LIVE ON.",
    key: "3"
  }
]

const Example = () => <UncontrolledCarousel items={items} />

export default Example
