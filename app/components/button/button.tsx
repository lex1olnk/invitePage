import React, { BaseSyntheticEvent, ButtonHTMLAttributes, MouseEvent, MouseEventHandler, useState } from 'react'
import styles from './button.module.css';
import { ButtonProps } from './button.props'
import classNames from 'classnames';

type PositionButton = {
	top: number,
	left: number,
}

const Button = ({ children, isMoving = false, handleTimer, ...props }: ButtonProps): JSX.Element => {
	const [position, setPosition] = useState<PositionButton>({top: 0, left: 0})

	const handleClick = (e: BaseSyntheticEvent) => {
		const maxHeight = window.innerHeight - e.target.offsetHeight;
		const maxWidth = window.innerWidth - e.target.offsetWidth;
		const randHeight = Math.random() * maxHeight;
		const randWidth = Math.random() * maxWidth;
		if (handleTimer) handleTimer();
		setPosition({
			top: randHeight,
			left: randWidth
		});
	}

	return (
		<button
			className={styles.button}
			style={isMoving ? {top: position.top, left: position.left, position: 'absolute'} : {}}
			onClick={e => {
				handleClick(e)
			}}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button;
