import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { css } from "linaria"

import Layout from "../components/Layout"
import { GenericLink } from "../components/buttons"
import SEO from "../components/seo"
import HeaderLogo from "../components/HeaderLogo"

const teamBody = css`
  > * {
    flex: 1;
  }
`

function TeamBody({ children }) {
  return (
    <div style={{ display: "flex" }} className={teamBody}>
      {children}
    </div>
  )
}

function TeamHeader({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "10rem",
      }}
    >
      {children}
    </div>
  )
}

const shortcodes = { GenericLink, TeamHeader, TeamBody, HeaderLogo }

const IndexPage = () => {
  const {
    mdx: { body },
  } = useStaticQuery(graphql`
    query teamQuery {
      mdx(frontmatter: { id: { eq: "team" } }) {
        body
      }
    }
  `)

  return (
    <Layout>
      <SEO />
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default IndexPage
