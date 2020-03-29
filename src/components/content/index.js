import React from "react"
import PropTypes from "prop-types"
import "./style.css"
import { AdditionalInfo } from "../popup/index.js"

export const Content = (props) => {
  return (
    <div className="content">
      <div className="number">
        <p align="left">{formatNumbers(props.oilLeft)}</p>
      </div>
      <div className="message">
        <p>barrels of oil left.</p>
      </div>
      <AdditionalInfo timeLeft={props.timeLeft}/>
    </div>
  )
}

const formatNumbers = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

Content.propTypes = {
  oilLeft: PropTypes.number,
  timeLeft: PropTypes.string
}
