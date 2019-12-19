import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "linaria"

import * as colors from "../../shared/constants/colors"
import footerLogo from "../../assets/images/footer-logo.png"
import mail from "../../assets/images/mail.png"
import linkedin from "../../assets/images/in.png"

const footerLogoStyle = css`
  @media only screen and (max-width: 750px) {
    width: 50px;
  }
  @media only screen and (max-width: 580px) {
    display: none;
  }
`

const usefulLinks = css`
  a {
    text-decoration: none;
    display: block;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.028rem;
    line-height: 1.125rem;
    color: #3d1300;
  }
`

const socialRow = css`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 0.5rem;
  }
`

export default function Footer() {
  const {
    mdx: { frontmatter },
  } = useStaticQuery(graphql`
    query footerQuery {
      mdx(frontmatter: { id: { eq: "footer" } }) {
        frontmatter {
          mail
          linkedin
          piva
          societyData
          privacyPolicy
        }
      }
    }
  `)

  return (
    <footer
      className={usefulLinks}
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
        <div style={{ width: "6.1rem" }}>
          <Link to={frontmatter.societyData}>Dati societari</Link>
          <a
            href={frontmatter.privacyPolicy}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy policy
          </a>
        </div>
        <span style={{ width: "8.875rem" }}>
          <span className={socialRow}>
            <img src={mail} style={{ width: "16px" }} alt="mail" />
            <a href={`mailto:${frontmatter.mail}`}>{frontmatter.mail}</a>
          </span>
          <span className={socialRow}>
            <img src={linkedin} style={{ width: "16px" }} alt="linkedin" />
            <a
              href={frontmatter.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </span>
        </span>
      </div>
      <span>{`P.IVA ${frontmatter.piva}`}</span>
    </footer>
  )
}
