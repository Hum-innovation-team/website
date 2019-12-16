import React from "react"
import { css } from "linaria"

export function AlignRight({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {children}
    </div>
  )
}

export function AlignLeft({ children }) {
  return <div style={{ textAlign: "left" }}>{children}</div>
}

const leftParagraph = css`
  max-width: 800px;
  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`

export function LeftParagraph({ children, margin }) {
  return (
    <div className={leftParagraph} style={{ ...margin }}>
      {children}
    </div>
  )
}

export function AlignCenter({ children }) {
  return <div style={{ textAlign: "center" }}>{children}</div>
}

export function RowCenter({ children }) {
  return <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
}

export function RowTop({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>{children}</div>
  )
}
