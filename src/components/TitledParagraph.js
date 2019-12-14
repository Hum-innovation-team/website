import React from "react"
import { css } from "linaria"

const titledParagraph = css`
  display: flex;
  margin-top: 4rem;
  align-self: center;

  > div {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  > :first-child {
    max-width: 28.75rem;
  }

  > :nth-child(2) {
    max-width: 33.25rem;
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;

    > div {
      margin: 0;
    }
  }
`

export default function TitledParagraph({ children }) {
  return <div className={titledParagraph}>{children}</div>
}
