/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./normalize.css"
import "./index.css"

const Layout = ({ children, style }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main
          style={{
            width: "80%",
            maxWidth: "1900px",
            paddingTop: "4.5rem",
            margin: "0 auto",
            ...(style || {}),
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
