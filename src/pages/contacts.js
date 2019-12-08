import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { css } from "linaria"

import Layout from "../components/Layout"
import { GenericLink, Submit } from "../components/buttons"
import SEO from "../components/seo"
import HeaderLogo from "../components/HeaderLogo"

const submit = css`
  background-color: #3d1300;
  color: #fff;
  width: 11.125rem;
  align-self: flex-end;
  margin: 1.5rem 0;
  font-family: "Acumin";
  font-size: 1.5rem;
  padding: 2rem;
  border: none;
`

const contactsBody = css`
  display: flex;
  flex-direction: row;

  > * {
    flex: 1;
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`

function ContactsBody({ children }) {
  return <div className={contactsBody}>{children}</div>
}

const input = css`
  border: 0.125rem solid #3d1300;
  background-color: #ffd000;
  color: #430f00;
  font-family: "Acumin";
  font-size: 1.5rem;
  padding: 2rem 0.2rem 0.2rem 1rem;
  padding-top: 2rem;
  width: 100%;
  outline: 0;

  :focus {
    border: 2px solid #fff;
    outline: 0;
    background-color: #fff;
  }
`

const formField = css`
  margin: 1.5rem 0;
  position: relative;

  > small {
    color: #3d1300;
    font-family: "Acumin";
    font-size: 1rem;
    position: absolute;
    top: 1.4rem;
    left: 1.1875rem;
    transition: all 0.2s ease-in-out;
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: 0.047rem;
    opacity: 0.6;
    pointer-events: none;
  }

  > input:focus + small {
    top: 1rem;
    font-size: 0.75rem;
    opacity: 1;
    color: #430f00;
    font-weight: 700;
    text-transform: uppercase;
  }
`

function FormField({ type, placeholder }) {
  const [value, setValue] = useState("")

  return (
    <div className={formField}>
      <input
        className={input}
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <small
        style={
          value
            ? {
                top: " 1rem",
                fontSize: " 0.75rem",
                opacity: " 1",
                color: " #430f00",
                fontWeight: " 700",
                textTransform: " uppercase",
              }
            : null
        }
      >
        {placeholder}
      </small>
    </div>
  )
}

const form = css`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`

function ContactsForm() {
  return (
    <form className={form}>
      <FormField type="text" placeholder="nome" />
      <FormField type="text" placeholder="cognome" />
      <FormField type="text" placeholder="indirizzo e-mail" />
      <textarea className={input} type="textarea" placeholder="Nome" />
      <Submit value="Invia" className={submit} />
    </form>
  )
}

const shortcodes = { GenericLink, ContactsBody, ContactsForm, HeaderLogo }

const IndexPage = () => {
  const {
    mdx: { body },
  } = useStaticQuery(graphql`
    query contactsQuery {
      mdx(frontmatter: { id: { eq: "contacts" } }) {
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
