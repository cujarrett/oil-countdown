import React from "react"
import PropTypes from "prop-types"
import "./style.css"

export const Content = (props) => {
  return (
    <div className="content">
      <div className="number">
        <p align="left">{formatNumbers(props.oilLeft)}</p>
      </div>
      <div className="message">
        <p>barrels of oil left.</p>
      </div>
      <div className="source">
        <a href="https://github.com/cujarrett/oil-countdown/blob/master/media/source.pdf">source</a>
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
