import React, { BaseSyntheticEvent, ButtonHTMLAttributes, MouseEvent, MouseEventHandler, useState } from 'react'
import styles from './button.module.css';
import { ButtonProps } from './button.props'
import classNames from 'classnames';

type PositionButton = {
	position: string,
	top: number,
	left: number
}

const Button = ({ children, isMoving = false, ...props }: ButtonProps): JSX.Element => {
	const [position, setPosition] = useState<PositionButton>({top: 0, left: 0, position: 'static'})

	const handleClick = (e: BaseSyntheticEvent) => {
		const maxHeight = window.innerHeight - e.target.offsetHeight;
		const maxWidth = window.innerWidth - e.target.offsetWidth;
		const randHeight = Math.random() * maxHeight;
		const randWidth = Math.random() * maxWidth;
		setPosition({
			position: 'absolute',
			top: randHeight,
			left: randWidth
		});
	}

	return (
		<button
			className={styles.button}
			style={isMoving ? position : {}}

			onClick={e => handleClick(e)}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button;
