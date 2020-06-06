import React, { useState } from 'react'
import Layout from '../components/Layout'
import Home from '../components/Home'
import HomeGuest from '../components/HomeGuest'

const IndexPage = (props) => {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('complexappToken')))

  return (
    <Layout>
      {
        loggedIn ? <Home /> : <HomeGuest />
      }
    </Layout>
  )
}

export default IndexPage