import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/Layout"
import { GenericLink } from "../components/buttons"
import SEO from "../components/seo"
import HeaderLogo from "../components/HeaderLogo"
import TitledParagraph from "../components/TitledParagraph"

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

const shortcodes = { GenericLink, TeamHeader, TitledParagraph, HeaderLogo }

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
