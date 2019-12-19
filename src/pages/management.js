import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { css } from "linaria"

import Layout from "../components/Layout"
import { Accordion } from "../components/buttons"
import SEO from "../components/seo"
import { AlignRight, LeftParagraph } from "../components/alignments"
import HeaderLogo from "../components/HeaderLogo"
import PageHeader from "../components/PageHeader"
import TitledParagraph from "../components/TitledParagraph"

const title = css`
  h1 {
    font-size: 8rem;
  }

  @media only screen and (max-width: 1200px) {
    h1 {
      font-size: 6rem;
    }
  }
  @media only screen and (max-width: 850px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media only screen and (max-width: 360px) {
    h1 {
      font-size: 3.2rem;
    }
  }
`

function ManagementTitle() {
  return (
    <div className={title}>
      <h1>.management</h1>
    </div>
  )
}

const shortcodes = {
  Accordion,
  PageHeader,
  LeftParagraph,
  TitledParagraph,
  HeaderLogo,
  ManagementTitle,
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
