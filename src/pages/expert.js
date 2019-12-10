import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { css } from "linaria"

import Layout from "../components/Layout"
import { Accordion } from "../components/buttons"
import SEO from "../components/seo"
import { AlignRight, LeftParagraph } from "../components/alignments"
import HeaderLogo from "../components/HeaderLogo"

const expertSection2 = css`
  display: flex;
  > * {
    flex: 1;
  }
`

function ExpertBody({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  )
}

function ExpertSection2({ children }) {
  return (
    <div className={expertSection2} style={{ marginTop: "4rem" }}>
      {children}
    </div>
  )
}

function ExpertHeader({ children }) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "6rem",
      }}
    >
      {children}
    </header>
  )
}

const shortcodes = {
  Accordion,
  ExpertHeader,
  ExpertBody,
  LeftParagraph,
  ExpertSection2,
  HeaderLogo,
  AlignRight,
}

const IndexPage = () => {
  const {
    mdx: { body },
  } = useStaticQuery(graphql`
    query expertQuery {
      mdx(frontmatter: { id: { eq: "expert" } }) {
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
