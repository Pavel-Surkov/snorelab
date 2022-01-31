import React from 'react';
import { StopBangQuestionnaire } from '../components/StopBangQuestionnaire';
import { Share } from '../components/Share';

export const StopBang = () => {
	return (
		<main className="stop-bang">
			<StopBangQuestionnaire />
			<Share title="Share" />
		</main>
	);
};
