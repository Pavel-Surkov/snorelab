import React from 'react';
import { InsightMain } from '../components/InsightMain';
import { InsightHowUse } from '../components/InsightHowUse';
import { InsightAdvice } from '../components/InsightAdvice';

export const Insight = () => {
	return (
		<main className="insight">
			<div className="insight-wrapper">
				<InsightMain />
				<InsightHowUse />
				<InsightAdvice />
			</div>
		</main>
	);
};
