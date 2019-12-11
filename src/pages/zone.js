import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { css } from "linaria"

import Layout from "../components/Layout"
import { GenericLink } from "../components/buttons"
import SEO from "../components/seo"
import { LeftParagraph } from "../components/alignments"
import HeaderLogo from "../components/HeaderLogo"
import TitledParagraph from "../components/TitledParagraph"

function ZoneHeader({ children }) {
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

const shortcodes = {
  GenericLink,
  ZoneHeader,
  TitledParagraph,
  HeaderLogo,
  LeftParagraph: ({ children }) => (
    <LeftParagraph margin={{ marginTop: "5rem" }}>{children}</LeftParagraph>
  ),
}

const IndexPage = () => {
  const {
    mdx: { body },
  } = useStaticQuery(graphql`
    query zoneQuery {
      mdx(frontmatter: { id: { eq: "zone" } }) {
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
