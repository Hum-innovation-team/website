import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/Layout"
import { Accordion } from "../components/buttons"
import SEO from "../components/seo"
import { AlignRight, LeftParagraph } from "../components/alignments"
import HeaderLogo from "../components/HeaderLogo"
import PageHeader from "../components/PageHeader"
import TitledParagraph from "../components/TitledParagraph"

function ExpertBody({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  )
}

const shortcodes = {
  Accordion,
  PageHeader,
  ExpertBody,
  LeftParagraph,
  TitledParagraph,
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
