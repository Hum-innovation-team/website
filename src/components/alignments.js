import React from "react"

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

export function LeftParagraph({ children, margin }) {
  return <div style={{ width: "60%", margin }}>{children}</div>
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
