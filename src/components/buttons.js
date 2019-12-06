/* eslint-disable import/prefer-default-export */
import React from "react"
import { Link } from "gatsby"

export function GenericLink({ children, iconElement, to }) {
  return (
    <div style={{ textAlign: "right" }}>
      <Link
        to={to}
        style={{
          display: "inline-block",
          textDecoration: "none",
          padding: "1.75rem",
          margin: "1.5rem",
          color: "#fff",
          backgroundColor: "#3d1300",
          fontFamily: "Acumin",
          fontWeight: "400",
          letterSpacing: "0.047rem",
          fontSize: "1.5rem",
        }}
      >
        {children}
        {iconElement}
      </Link>
    </div>
  )
}
