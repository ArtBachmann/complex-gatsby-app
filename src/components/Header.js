import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from './HeaderLoggedIn'

const Header = ({ siteTitle }) => {

  const [loggedIn, setLoggedIn] = useState()

  // const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('complexappToken')))
  // const [flashMessages, setFlashMessages] = useState([])

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-1 mr-md-auto font-weight-normal">
          <Link to="/">
            {siteTitle}
          </Link>
        </h4>
        <HeaderLoggedOut />
        {/* {props.loggedIn ? <HeaderLoggedIn setLoggedIn={props.setLoggedIn} /> :
          <HeaderLoggedOut setLoggedIn={props.setLoggedIn} />} */}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
