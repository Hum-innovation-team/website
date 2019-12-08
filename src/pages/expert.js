import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/Layout"
import { Accordion } from "../components/buttons"
import SEO from "../components/seo"
import { AlignRight } from "../components/alignments"
import HeaderLogo from "../components/HeaderLogo"
import "./expert.css"

function ExpertBody({ children }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="expert-body"
    >
      {children}
    </div>
  )
}

function ExpertSection1({ children }) {
  return <div style={{ width: "60%" }}>{children}</div>
}

function ExpertSection2({ children }) {
  return (
    <div className="expert-section2" style={{ marginTop: "4rem" }}>
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
  ExpertSection1,
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
