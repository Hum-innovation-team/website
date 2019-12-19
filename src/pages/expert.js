import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/Layout"
import { GenericLink } from "../components/buttons"
import SEO from "../components/seo"
import { AlignRight, LeftParagraph } from "../components/alignments"
import HeaderLogo from "../components/HeaderLogo"
import PageHeader from "../components/PageHeader"
import TitledParagraph from "../components/TitledParagraph"

const shortcodes = {
  PageHeader,
  LeftParagraph,
  TitledParagraph,
  HeaderLogo,
  AlignRight,
  GenericLink,
  Link,
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
