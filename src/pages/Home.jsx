import React from 'react';
import { HomeMain } from '../components/HomeMain';
import { HomeDescription } from '../components/HomeDescription';

export const Home = () => {
	return (
		<main className="home">
			<HomeMain />
			<HomeDescription />
		</main>
	);
};
