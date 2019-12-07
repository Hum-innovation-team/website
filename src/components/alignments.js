import React from "react"

export function AlignRight({ children }) {
  return <div style={{ textAlign: "right" }}>{children}</div>
}

export function AlignLeft({ children }) {
  return <div style={{ textAlign: "left" }}>{children}</div>
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
