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

export function LeftParagraph({ children, margin, borders }) {
  return (
    <div style={{ ...margin }}>
      <div
        style={
          borders
            ? {
                position: "absolute",
                left: "0",
                width: "50%",
                borderTop: "2px solid #3d1300",
              }
            : {}
        }
      />

      <div
        className={leftParagraph}
        style={{
          ...(borders
            ? {
                border: "2px solid #3d1300",
                padding: "2.5rem",
                marginBottom: borders ? "-2px" : 0,
              }
            : {}),
        }}
      >
        {children}
      </div>
      <div
        style={
          borders
            ? {
                position: "absolute",
                right: "0",
                width: "50%",
                borderTop: "2px solid #3d1300",
              }
            : {}
        }
      />
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
