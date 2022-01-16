import React from 'react';
import { HowWorksMain } from '../components/HowWorksMain';
import { HowWorksSelect } from '../components/HowWorksSelect';
import { HowWorksMake } from '../components/HowWorksMake';

export const HowWorks = () => {
	return (
		<main className="how-works">
			<HowWorksMain />
			<HowWorksSelect />
			<HowWorksMake />
		</main>
	);
};
