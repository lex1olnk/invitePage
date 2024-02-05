import React from 'react'
import styles from './button.module.css';
import { ButtonProps } from './button.props'

const Button = ({ children, isMoving = false, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={styles.button}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button;
