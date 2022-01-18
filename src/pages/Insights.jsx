import React from 'react';
import { InsightsTabs } from '../components/InsightsTabs';
import { InsightsFeautured } from '../components/InsightsFeautured';

export const Insights = () => {
	return (
		<main className="insights">
			<InsightsTabs />
			<InsightsFeautured />
		</main>
	);
};
