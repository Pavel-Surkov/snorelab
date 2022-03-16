import React from 'react';
//const { createElement, render } = wp.element;
import { InsightsTabs } from '../components/InsightsTabs';
import { InsightsFeautured } from '../components/InsightsFeautured';
import { InsightsArticles } from '../components/InsightsArticles';
import { InsightsAssess } from '../components/InsightsAssess';

import stop_bang from '@/images/stop-bang.png';
import stop_bang_2x from '@/images/stop-bang@2x.png';
import screening from '@/images/screening.png';
import screening_2x from '@/images/screening@2x.png';

const insightsAssessArticles = [
	{
		title: 'Answer the Stop-BANG Questionnaire',
		link: 'stopbang.html',
		image: { '1x': stop_bang, '2x': stop_bang_2x }
	},
	{
		title: 'Screening dor Sleep Apnea: Epworth Sleepiness Scale',
		link: 'epworth.html',
		image: { '1x': screening, '2x': screening_2x }
	}
];

export const Insights = () => {
	return (
		<main className="insights">
			<InsightsTabs />
			<InsightsFeautured />
			<InsightsArticles />
			<InsightsAssess
				light={true}
				titleClass="title_size-l"
				titleText="Assess your sleep apnea risk"
				articles={insightsAssessArticles}
			/>
		</main>
	);
};
