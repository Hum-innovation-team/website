import { Link } from "gatsby"
import React from "react"
import { css } from "linaria"

import * as colors from "../../shared/constants/colors"
import logo from "../../assets/images/logo.png"

const rightSlogan = css`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`

const nav = css`
  margin: 0 auto  1.45rem;
  padding: 0 2rem
  max-width: 1200px;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div:first-child {
    display: flex;
    align-items: flex-end;
    > a > img {
      width: 7rem;
      margin: 0 3rem 0 0;
      vertical-align: middle;
    }
  }

  @media only screen and (max-width: 750px) {
    width: 95%;
    justify-content: center;
    > div:first-child {
      align-items: center;
      flex-direction: column;

      > a > img {
        margin: 0 0 1rem 0;
      }
    }
  }
`

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
      <header className={nav}>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <nav>
            <NavItem to="/zone">.zone</NavItem>
            <NavItem to="/expert">.expert</NavItem>
            <NavItem to="/team">.team</NavItem>
            {/* TODO <NavItem to="/codes">.codes</NavItem> */}
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

        <div className={rightSlogan}>
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
