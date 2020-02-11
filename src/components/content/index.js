import React from "react"
import PropTypes from "prop-types"
import "./style.css"

export const Content = (props) => {
  return (
    <div className="content">
      <div className="message">
        <p>barrels of oil left in the world</p>
      </div>
      <div className="number">
        <p align="left">{formatNumbers(props.oilLeft)}</p>
      </div>
    </div>
  )
}

const formatNumbers = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

Content.propTypes = {
  oilLeft: PropTypes.number
}
