'use client';

import React, { useState } from 'react';

import Image from "next/image";
import Button from './components/button/button';

import first from './img/first.gif';
import no from './img/no.gif';
import final from './img/final.gif';

export default function Home() {
	const [pressed, setPressed] = useState<boolean>(false);
	const [active, setActive] = useState<boolean>(false);

	const handleTimer = () => {
		setActive(true);
		setTimeout(() => {
			setActive(false);
		}, 750);
	}

	console.log(pressed, active);

	return (	
		<main className="flex min-h-screen flex-col items-center justify-between">
			{pressed 
				? <div className='my-auto'>
					<Image src={final} alt="final" height={400} width={400} />
					<p className='font-bold text-lg text-center text-black'>Ураааааааа!</p>
				  </div>
				: <div className='flex flex-col m-auto'>
					<p className='text-center text-xl text-black font-bold'>Мы пойдем сегодня бухать?</p>
					{active
						? <Image className='my-4 h-72' src={no} alt="no" height={300} width={300} />
						: <Image className='my-4 h-72' src={first} alt="first" height={300} width={300} />
					}
					<div className='flex flex-row justify-around mx-8'>
						<Button onClick={() => setPressed(true)}>Конечно</Button>
						<Button isMoving={true} handleTimer={handleTimer}>Ты что!</Button>
					</div>
				  </div>
			}
		</main>
	);
}
