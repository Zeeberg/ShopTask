import LogoIcon from 'assets/icons/LogoIcon'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/products">
      <LogoIcon />
    </Link>
  )
}

export default Logo
