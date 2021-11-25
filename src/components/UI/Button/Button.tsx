import React, { FC } from 'react'

import styles from './styles.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
