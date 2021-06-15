import React from "react"
import PropTypes from "prop-types"
import "./style.css"

export const Footer = () => {
  return (
    <div className="footer">
      <h4>
        Made by{" "}
        <a href="https://cujarrett.dev">
          @cujarrett
        </a>{" "}
        with <i className="fa fa-heart" /> and JavaScript
      </h4>
    </div>
  )
}

Footer.propTypes = {
  footerStyling: PropTypes.string
}
