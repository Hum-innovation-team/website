import React from "react"
import logo from "../assets/images/header-logo.png"

const HeaderLogo = () => {
  return (
    <img
      src={logo}
      style={{ width: "200px", alignSelf: "flex-end" }}
      alt="logo"
    />
  )
}

export default HeaderLogo
