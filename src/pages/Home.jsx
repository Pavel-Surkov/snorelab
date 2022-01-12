import React from 'react';
import { HomeMain } from '../components/HomeMain';
import { HomeDescription } from '../components/HomeDescription';
import { HomeReviews } from '../components/HomeReviews';

export const Home = () => {
	return (
		<main className="home">
			<HomeMain />
			<HomeDescription />
			<HomeReviews />
		</main>
	);
};
