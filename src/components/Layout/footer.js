import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "linaria"

import * as colors from "../../shared/constants/colors"
import footerLogo from "../../assets/images/LogoScuro.png"
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
          linkedin
          piva
          privacyPolicy
        }
      }
    }
  `)

  const [openData, setOpenData] = useState(false)

  const obfuscatedMail = () => {
    const coded = "oBfT4oT@VPp.2D3"
    const key = "LRvNXawx0P6dEQtrIFjC48YlchmU5TD9JHKnzs3oVpAOZb1G7ife2yBWuSMqkg"
    const shift = coded.length
    let link = ""
    for (let i = 0; i < coded.length; i += 1) {
      if (key.indexOf(coded.charAt(i)) === -1) {
        const ltr = coded.charAt(i)
        link += ltr
      } else {
        const ltr =
          (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
        link += key.charAt(ltr)
      }
    }

    return link
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "5rem auto 0 auto" }}>
      <footer
        className={usefulLinks}
        style={{
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
            style={{ alignSelf: "baseline", maxWidth: "80px" }}
          />
          <div style={{ width: "6.1rem" }}>
            <a
              href={frontmatter.privacyPolicy}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy policy
            </a>
            <button
              type="button"
              style={{ cursor: "pointer", outline: 0 }}
              onClick={() => {
                setOpenData(!openData)
                window.scrollTo({
                  bottom: document.body.scrollHeight + 120,
                  behavior: "smooth",
                })
              }}
            >
              Dati societari
            </button>
            <Link to="/en/contacts">Inglese</Link>
          </div>
          <span style={{ width: "8.875rem" }}>
            <span className={socialRow}>
              <img src={mail} style={{ width: "16px" }} alt="mail" />
              <button
                style={{ cursor: "pointer" }}
                type="button"
                onClick={() => {
                  const obf = obfuscatedMail()
                  window.location.replace(`mailto:${obf}`)
                }}
              >
                EMAIL
              </button>
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
      <p
        style={{
          lineHeight: "1.5rem",
          margin: "2rem 0 0 2rem",
          maxHeight: "0",
          overflow: "hidden",
          transition: ".5s max-height",
          ...(openData
            ? {
                maxHeight: "10rem",
              }
            : {}),
        }}
      >
        Dati Societari
        <br />
        HUM S.r.l.
        <br />
        Sede legale: via Aldo Moro, 22 San Lazzaro di Savena
        <br />
        Numero REA BO - 537739
        <br />
        Codice fiscale e n. Iscrizione al registro imprese 03671581209
        <br />
        Partita IVA IT 03671581209
        <br />
        Capitale sociale I.V. 10.000,00 €
      </p>
    </div>
  )
}
