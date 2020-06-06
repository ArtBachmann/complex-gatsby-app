import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import '../main.css'
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
      allSite {
        edges {
          node {
            siteMetadata {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.allSite.edges[0].node.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
