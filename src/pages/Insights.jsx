import React from 'react';
import { InsightsTabs } from '../components/InsightsTabs';
import { InsightsFeautured } from '../components/InsightsFeautured';
import { InsightsArticles } from '../components/InsightsArticles';
import { InsightsAssess } from '../components/InsightsAssess';

export const Insights = () => {
	return (
		<main className="insights">
			<InsightsTabs />
			<InsightsFeautured />
			<InsightsArticles />
			<InsightsAssess />
		</main>
	);
};
