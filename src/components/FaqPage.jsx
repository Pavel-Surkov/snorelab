//import React from 'react';
const { createElement, render } = wp.element;
import { Accordion } from './Accordion';
import faqElementsArr from '@/helpers/faqContent';

export const FaqPage = () => {
	return (
		<section className="faq-page">
			<div className="faq-page__wrapper">
				<div className="container">
					<h1 className="title title_fade title_size-l faq-page__title">FAQ</h1>
					<span className="faq-page__subtitle">Frequently Asked Questions</span>
					<div className="faq-page__block">
						{/* Renders formed FAQ sections */}
						{faqElementsArr.map(({ title, elements }) => (
							<Accordion key={title} title={title} elements={elements} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
