import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/Layout"
import { GenericLink } from "../components/buttons"
import { AlignRight } from "../components/alignments"
import SEO from "../components/seo"
import "./index.css"

function HomeBody({ children }) {
  return <div style={{ width: "70%", marginTop: "4rem" }}>{children}</div>
}

const shortcodes = { GenericLink, HomeBody, AlignRight }

const IndexPage = () => {
  const {
    mdx: { body },
  } = useStaticQuery(graphql`
    query indexQuery {
      mdx(frontmatter: { id: { eq: "home" } }) {
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
