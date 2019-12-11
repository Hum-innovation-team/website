/* eslint-disable import/prefer-default-export */
import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "linaria"

import styles from "./buttons.module.css"

export function GenericLink({ children, iconElement, to }) {
  return (
    <Link to={to} className={styles.genericButton}>
      {children}
      {iconElement}
    </Link>
  )
}

const accordionText = css`
  width: 70%;
  text-align: left;
  align-self: flex-end;

  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`

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
          ...(open ? { maxHeight: "120rem" } : { maxHeight: "0rem" }),
        }}
      >
        <div className={accordionText}>{children}</div>
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
