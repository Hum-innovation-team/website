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

const zoneSection = css`
  margin-top: 5rem;
  > * {
    flex: 1;
  }
`

function ZoneSection({ children }) {
  return (
    <div style={{ display: "flex" }} className={zoneSection}>
      {children}
    </div>
  )
}

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
  ZoneSection,
  HeaderLogo,
  LeftParagraph,
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
