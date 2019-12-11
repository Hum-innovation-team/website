import React from "react"
import { css } from "linaria"

const pageHeader = css`
  display: flex;
  align-items: flex-start;
  margin-bottom: 6rem;

  @media only screen and (max-width: 750px) {
    flex-direction: column-reverse;
  }
`

export default function PageHeader({ children }) {
  return <header className={pageHeader}>{children}</header>
}
