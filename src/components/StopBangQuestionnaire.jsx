//import React from 'react';
const { createElement, render } = wp.element;
import { Questionnaire } from './Questionnaire';
import { stopBangQuestions } from '../helpers/variables';

export const StopBangQuestionnaire = () => {
	return (
		<section className="questionnaire">
			<div className="questionnaire-wrapper">
				<div className="container">
					<h1 className="title title_size-m questionnaire-title">STOP-Bang Questionnaire</h1>
					<div className="questionnaire-text">
						<p>
							The STOP-Bang questionnaire is the favoured sleep apnea screening tool in the medical
							profession.
						</p>
						<p>
							Simply answer the eight yes/no questions below to find out how at risk of obstructive sleep
							apnea you are.
						</p>
						<p>
							You can{' '}
							<a className="link" href="#">
								read more about identifying obstructive sleep apnea
							</a>{' '}
							in&nbsp;SnoreLab’s Insights area.
						</p>
						<p>
							You can also assess your sleep apnea risk by looking at your level of&nbsp;daytime fatigue
							using the{' '}
							<a className="link" href="#">
								Epworth Sleepiness Scale
							</a>.
						</p>
					</div>
					<Questionnaire questions={stopBangQuestions} btnTitle="Access the risk" />
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
