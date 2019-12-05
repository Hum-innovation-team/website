import { Link } from "gatsby"
import React from "react"

import * as colors from "../../shared/constants/colors"
import logo from "../../assets/images/logo.png"

const NavItem = ({ to, children }) => (
  <Link
    to={to}
    style={{ color: colors.brown, fontSize: "1.2rem", textDecoration: "none" }}
  >
    {children}
  </Link>
)

const Header = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#fff" }}>
      <header
        style={{
          margin: "0 auto",
          maxWidth: "80%",
          height: "7.5rem",
          marginBottom: `1.45rem`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ margin: 0 }} />
          <nav style={{ margin: "0 3rem" }}>
            <NavItem to="/zone">.zone</NavItem>
          </nav>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              textAlign: "right",
              textTransform: "uppercase",
              fontSize: ".8rem",
              lineHeight: ".8rem",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            <span style={{ color: colors.brown }}>innovation needs</span>
            <br />
            <span style={{ color: colors.yellow }}>hum it!</span>
          </p>
        </div>
      </header>
    </div>
  )
}

export default Header
