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

const usefulLinks = css`
  width: 6.1rem;

  > a {
    text-decoration: none;
    display: block;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.028rem;
    line-height: 1.125rem;
    color: #3d1300;
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
          info
          piva
          societyData
          privacyPolicy
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
        <div className={usefulLinks}>
          <a
            href={frontmatter.societyData}
            target="_blank"
            rel="noopener noreferrer"
          >
            Dati societari
          </a>
          <a
            href={frontmatter.privacyPolicy}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy policy
          </a>
        </div>
        <span style={{ width: "8.875rem" }}>{frontmatter.info}</span>
      </div>
      <span>{`P.IVA ${frontmatter.piva}`}</span>
    </footer>
  )
}
