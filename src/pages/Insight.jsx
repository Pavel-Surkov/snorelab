import React, { useEffect } from 'react';
import { InsightMain } from '../components/InsightMain';
import { InsightHowUse } from '../components/InsightHowUse';
import { InsightAdvice } from '../components/InsightAdvice';
import { InsightStudies } from '../components/InsightStudies';
import { InsightReview } from '../components/InsightReview';
import { InsightDownload } from '../components/InsightDownload';
import { calculateTextWidth } from '../helpers/functions';

export const Insight = () => {
	useEffect(() => {
		window.addEventListener('load', calculateTextWidth);
		window.onresize = () => calculateTextWidth();

		return () => {
			window.addEventListener('load', calculateTextWidth);
		};
	}, []);

	return (
		<main className="insight">
			<div className="insight-wrapper">
				<InsightMain />
				<InsightHowUse />
				<InsightAdvice />
				<InsightStudies />
				<InsightReview />
				<InsightDownload />
			</div>
		</main>
	);
};
