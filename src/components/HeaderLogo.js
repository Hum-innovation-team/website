import React, { useEffect, useState } from "react"
import { css } from "linaria"

import h from "../assets/images/letters/h.png"
import t from "../assets/images/letters/t.png"
import m from "../assets/images/letters/m.png"
import z from "../assets/images/letters/z.png"
import e from "../assets/images/letters/e.png"
import c from "../assets/images/letters/c.png"

const icons = {
  "": h,
  code: c,
  management: m,
  zone: z,
  team: t,
  expert: e,
}

const headerLogo = css`
  width: 200px;
  align-self: flex-end;

  @media only screen and (max-width: 750px) {
    align-self: center;
  }
  @media only screen and (max-width: 450px) {
    width: 100px;
  }
`

const HeaderLogo = () => {
  const [icon, setIcon] = useState("")

  useEffect(() => {
    if (window) {
      const first = window.location.pathname.replace(/\//g, "")
      setIcon(first.replace("en", ""))
    }
  }, [typeof window !== "undefined" ? window.location.pathname : null])

  return (
    <img
      src={icon ? icons[icon] : icons[""]}
      className={headerLogo}
      alt="logo"
    />
  )
}

export default HeaderLogo
