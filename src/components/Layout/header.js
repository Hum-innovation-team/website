import { Link } from "gatsby"
import React from "react"

import * as colors from "../../shared/constants/colors"
import logo from "../../assets/images/logo.png"

const NavItem = ({ to, children, style }) => (
  <Link
    to={to}
    partiallyActive
    style={{
      color: colors.brown,
      fontSize: "1rem",
      textDecoration: "none",
      padding: "0.5rem 1rem",
      ...(style || {}),
    }}
    activeStyle={{ color: colors.yellow }}
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
          maxWidth: "82%",
          height: "7.5rem",
          marginBottom: `1.45rem`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "7rem",
                margin: "0 3rem 0 0",
                verticalAlign: "middle",
              }}
            />
          </Link>
          <nav>
            <NavItem to="/zone">.zone</NavItem>
            <NavItem to="/expert">.expert</NavItem>
            <NavItem to="/team">.team</NavItem>
            <NavItem to="/codes">.codes</NavItem>
            <NavItem
              to="/contacts"
              style={{
                border: "1px solid #3D1300",
                padding: "0.5rem calc(1rem - 1px)",
              }}
            >
              contatti
            </NavItem>
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
