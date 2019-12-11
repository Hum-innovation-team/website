import React from "react"
import { css } from "linaria"

import logo from "../assets/images/header-logo.png"

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
  return <img src={logo} className={headerLogo} alt="logo" />
}

export default HeaderLogo
