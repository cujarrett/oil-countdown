import React from "react"
import PropTypes from "prop-types"
import "./style.css"
import { version } from "../../../package.json"

export const Footer = () => {
  return (
    <div className="footer">
      <h4>
        Made with <i className="fa fa-heart"/>, JavaScript, and <i className="fa fa-github"/>
      </h4>
      <div className="version">
        <a href="https://github.com/cujarrett/oil-countdown/blob/master/CHANGELOG.md">{version}</a>
      </div>
    </div>
  )
}

Footer.propTypes = {
  footerStyling: PropTypes.string
}
