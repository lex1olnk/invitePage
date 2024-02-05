'use client';

import React, { useState } from 'react';

import Image from "next/image";
import myGif from './img/first.gif';
import Button from './components/button/button';

export default function Home() {
	const [pressed, setPressed] = useState<boolean>(false);

	return (	
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Image src={myGif} alt="my gif" height={300} width={300} />
			<div>
				<Button>Конечно</Button>
				<Button isMoving={true}>Ты что!</Button>
			</div>
		</main>
	);
}
