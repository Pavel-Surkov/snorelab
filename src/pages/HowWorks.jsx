import React from 'react';
import { HowWorksMain } from '../components/HowWorksMain';
import { HowWorksSelect } from '../components/HowWorksSelect';
import { HowWorksMake } from '../components/HowWorksMake';
import { HowWorksStart } from '../components/HowWorksStart';
import { HowWorksSleep } from '../components/HowWorksSleep';
import { HowWorksSee } from '../components/HowWorksSee';
import { HowWorksNotes } from '../components/HowWorksNotes';
import { HowWorksBottom } from '../components/HowWorksIntro';

export const HowWorks = () => {
	return (
		<main className="how-works">
			<HowWorksMain />
			<HowWorksSelect />
			<HowWorksMake />
			<HowWorksStart />
			<HowWorksSleep />
			<HowWorksSee />
			<HowWorksNotes />
			<HowWorksBottom />
		</main>
	);
};
