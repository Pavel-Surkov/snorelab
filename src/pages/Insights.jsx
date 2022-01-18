import React from 'react';
import { InsightsTabs } from '../components/InsightsTabs';
import { InsightsFeautured } from '../components/InsightsFeautured';
import { InsightsArticles } from '../components/InsightsArticles';

export const Insights = () => {
	return (
		<main className="insights">
			<InsightsTabs />
			<InsightsFeautured />
			<InsightsArticles />
		</main>
	);
};
