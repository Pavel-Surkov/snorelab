//import React from 'react';
const { createElement, render } = wp.element;
import { Questionnaire } from './Questionnaire';
import { epworthQuestions } from '../helpers/variables';

export const EpworthQuestionnaire = () => {
	return (
		<section className="questionnaire">
			<div className="questionnaire-wrapper">
				<div className="container">
					<h1 className="title title_size-m questionnaire-title">Epworth Sleepiness Scale</h1>
					<div className="questionnaire-text">
						<p>
							Feeling excessively sleepy during the day is a key symptom of sleep apnea. A useful way to
							measure your fatigue is by using the Epworth Sleepiness Scale.
						</p>
						<p>Consider the scenarios below and think about how likely you are to fall asleep.</p>
						<p>
							You can{' '}
							<a className="link" href="#">
								read more about identifying obstructive&nbsp;sleep apnea
							</a>{' '}
							in&nbsp;SnoreLab’s Insights area.
						</p>
						<p>
							You can also assess your sleep apnea risk using the{' '}
							<a className="link" href="#">
								STOP-Bang Questionnaire
							</a>
							.
						</p>
					</div>
					<Questionnaire questions={epworthQuestions} btnTitle="Calculate results" />
					<div className="questionnaire-change">
						<button type="button" className="btn btn-arrow questionnaire-change__prev">
							<div>Prev</div>
						</button>
						<button type="button" className="btn btn-arrow btn_gray-text questionnaire-change__next">
							<div>Next</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
