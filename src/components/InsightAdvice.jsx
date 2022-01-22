import React from 'react';
import { InsightSection } from './InsightSection';
import insight_3 from '../images/insight-img-3.png';
import insight_3_2x from '../images/insight-img-3@2x.png';
import insight_4 from '../images/insight-img-4.png';
import insight_4_2x from '../images/insight-img-4@2x.png';

export const InsightAdvice = () => {
	return (
		<InsightSection className="insight-advice" title={'1. Sleep on your side'} marginBottom={55}>
			<div className="insight-note insight-note_left-stick">
				<p>One of the simplest ways to combat your snoring is to make sure you sleep on your side.</p>
			</div>
			<div className="insight-text">
				<p>
					Sleeping on your back makes you far more likely to snore or&nbsp;experience sleep apnea; here, your
					jaw recedes, your tongue falls back, and weight on your neck compresses your upper airway.
					All&nbsp;of&nbsp;these disturb airflow and cause vibration [1].
				</p>
				<span className="insight-text__list-title">
					There are several ways to get yourself sleeping on your side:
				</span>
				<ul className="insight-text__list">
					<li className="insight-text__list-item">
						Use pillows effectively. You can buy specialist pillows that promote side sleeping or you can
						use normal pillows to prop yourself up&nbsp;to&nbsp;prevent you rolling onto your back.
					</li>
					<li className="insight-text__list-item">
						Make back sleeping difficult. The well-known method amongst many back-sleeping snorers is to{' '}
						<a href="#" className="link">
							tape a tennis ball
						</a>{' '}
						to the back of&nbsp;your pajamas so that sleeping on your back is uncomfortable and practically
						impossible.
					</li>
					<li className="insight-text__list-item">
						Positional trainers. There are devices that detect when you&nbsp;are&nbsp;sleeping on your back
						and give a small vibration which tells your subconscious mind that it is time to turn over.
					</li>
				</ul>
			</div>
			<div className="insight-img insight-img_with-note">
				<img src={insight_3} srcSet={`${insight_3} 1x, ${insight_3_2x} 2x`} alt="" />
				<p>Additional notes made on a session will appear in the Sleep Notes</p>
			</div>
			<div className="insight-img insight-img_with-note insight-img_text-left">
				<img src={insight_4} srcSet={`${insight_4} 1x, ${insight_4_2x} 2x`} alt="" />
				<p>
					Inconsistent snoring patterns with obvious pauses could indicate risky breathing periods. This was
					given to us by a SnoreLab user who went on to get a sleep apnea diagnosis.
				</p>
			</div>
		</InsightSection>
	);
};
