import React from "react"
import { css } from "linaria"

const titledParagraph = css`
  display: flex;
  > * {
    flex: 1;
  }
  margin-top: 4rem;

  > div {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;

    > div {
      margin: 0;
    }
  }
`

export default function TitledParagraph({ children }) {
  return <header className={titledParagraph}>{children}</header>
}
