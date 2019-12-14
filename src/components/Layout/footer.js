import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "linaria"

import * as colors from "../../shared/constants/colors"
import footerLogo from "../../assets/images/footer-logo.png"

const footerLogoStyle = css`
  @media only screen and (max-width: 750px) {
    width: 50px;
  }
  @media only screen and (max-width: 580px) {
    display: none;
  }
`

export default function Footer() {
  const {
    mdx: { frontmatter },
  } = useStaticQuery(graphql`
    query footerQuery {
      mdx(frontmatter: { id: { eq: "footer" } }) {
        frontmatter {
          location
          contacts
          copyCompanyName
        }
      }
    }
  `)

  return (
    <footer
      style={{
        maxWidth: "1200px",
        margin: "5rem auto 0 auto",
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
          justifyContent: "space-around",
        }}
      >
        <img
          src={footerLogo}
          alt="logo footer"
          className={footerLogoStyle}
          style={{ alignSelf: "baseline" }}
        />
        <span style={{ width: "9.75rem" }}>{frontmatter.location}</span>
        <span style={{ width: "7.25rem" }}>{frontmatter.contacts}</span>
      </div>
      <span>{`©${new Date().getFullYear()} @${
        frontmatter.copyCompanyName
      }`}</span>
    </footer>
  )
}
