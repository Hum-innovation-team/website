import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/Layout"
import { GenericLink } from "../components/buttons"
import SEO from "../components/seo"
import { LeftParagraph } from "../components/alignments"
import HeaderLogo from "../components/HeaderLogo"
import TitledParagraph from "../components/TitledParagraph"
import PageHeader from "../components/PageHeader"

const shortcodes = {
  GenericLink,
  PageHeader,
  TitledParagraph,
  HeaderLogo,
  LeftParagraph: ({ children, borders }) => (
    <LeftParagraph margin={{ marginTop: "5rem" }} borders={borders}>
      {children}
    </LeftParagraph>
  ),
}

const IndexPage = () => {
  const {
    mdx: { body },
  } = useStaticQuery(graphql`
    query zoneEnQuery {
      mdx(frontmatter: { id: { eq: "zone-en" } }) {
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
