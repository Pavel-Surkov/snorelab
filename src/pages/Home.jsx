import React from 'react';
import { HomeMain } from '../components/HomeMain';
import { HomeDescription } from '../components/HomeDescription';
import { HomeReviews } from '../components/HomeReviews';
import { PartnerApp } from '../components/PartnerApp';
import { HomeInsights } from '../components/HomeInsights';

export const Home = () => {
	return (
		<main className="home">
			<HomeMain />
			<HomeDescription />
			<HomeReviews />
			<PartnerApp />
			<HomeInsights />
		</main>
	);
};
