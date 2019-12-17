import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { css } from "linaria"

import Layout from "../components/Layout"
import { GenericLink } from "../components/buttons"
import { AlignRight } from "../components/alignments"
import SEO from "../components/seo"
import "./index.css"

const homeBody = css`
  width: 70%;
  margin-top: 4rem;

  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`

function HomeBody({ children }) {
  return <div className={homeBody}>{children}</div>
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
    <Layout maxWidth="1136px">
      <SEO />
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default IndexPage
