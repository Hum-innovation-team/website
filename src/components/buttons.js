/* eslint-disable import/prefer-default-export */
import React, { useState } from "react"
import { Link } from "gatsby"

import styles from "./buttons.module.css"

export function GenericLink({ children, iconElement, to }) {
  return (
    <Link to={to} className={styles.genericButton}>
      {children}
      {iconElement}
    </Link>
  )
}

export function Accordion({ children, iconElement, label }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className={styles.genericButton}
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        {label}
        {iconElement}
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "max-height .3s ease-in-out",
          ...(open ? { maxHeight: "50rem" } : { maxHeight: "0rem" }),
        }}
      >
        <div style={{ width: "70%", textAlign: "left", alignSelf: "flex-end" }}>
          {children}
        </div>
      </div>
    </>
  )
}

export function Submit({ value, onPress, className }) {
  return (
    <input
      type="submit"
      value={value}
      onPress={onPress}
      className={className}
    />
  )
}
