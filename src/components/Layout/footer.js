import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as colors from "../../shared/constants/colors"
import footerLogo from "../../assets/images/footer-logo.png"

export default function Footer() {
  const {
    markdownRemark: { frontmatter },
  } = useStaticQuery(graphql`
    query ContentByID {
      markdownRemark(frontmatter: { id: { eq: "footer" } }) {
        frontmatter {
          location
          contacts
        }
      }
    }
  `)

  return (
    <footer
      style={{
        width: "80%",
        margin: "0 auto",
        borderTop: "0.125rem solid #3d1300",
        paddingTop: "2.75rem",
        display: "flex",
        justifyContent: "space-between",
        fontWeight: "bold",
        color: colors.brown,
        fontSize: "0.875rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "32.5rem",
          justifyContent: "space-between",
        }}
      >
        <img
          src={footerLogo}
          alt="logo footer"
          style={{ alignSelf: "baseline" }}
        />
        <p style={{ width: "9.75rem" }}>{frontmatter.location}</p>
        <p style={{ width: "7.25rem" }}>{frontmatter.contacts}</p>
      </div>
      <span>{`©${new Date().getFullYear()} @${
        frontmatter.copyCompanyName
      }`}</span>
    </footer>
  )
}
