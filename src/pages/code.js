import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/Layout"
import { GenericLink } from "../components/buttons"
import SEO from "../components/seo"
import HeaderLogo from "../components/HeaderLogo"
import TitledParagraph from "../components/TitledParagraph"
import PageHeader from "../components/PageHeader"

const shortcodes = { GenericLink, PageHeader, TitledParagraph, HeaderLogo }

const CodesPage = () => {
  const {
    mdx: { body },
  } = useStaticQuery(graphql`
    query codeQuery {
      mdx(frontmatter: { id: { eq: "code" } }) {
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

export default CodesPage
