import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
  Link,
}

const IndexPage = () => {
  const {
    mdx: { body },
  } = useStaticQuery(graphql`
    query managementQuery {
      mdx(frontmatter: { id: { eq: "management" } }) {
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
