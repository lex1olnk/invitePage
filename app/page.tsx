'use client';

import React, { useState } from 'react';

import Image from "next/image";
import Button from './components/button/button';

import first from './img/first.gif';
import final from './img/final.gif';

export default function Home() {
	const [pressed, setPressed] = useState<boolean>(false);

	return (	
		<main className="flex min-h-screen flex-col items-center justify-between p-12">
			{pressed 
				? <div className='my-auto'>
					<Image src={final} alt="final" height={400} width={400} />
					<p className='font-bold text-lg text-center text-black'>Ураааааааа!</p>
				  </div>
				: <div className='flex h-fit flex-col m-auto p-12'>
					<Image src={first} alt="first" height={300} width={300} />
					<div className='mt-8 flex flex-row justify-between'>
						<Button onClick={() => setPressed(true)}>Конечно</Button>
						<Button isMoving={true}>Ты что!</Button>
					</div>
				  </div>
			}
		</main>
	);
}
