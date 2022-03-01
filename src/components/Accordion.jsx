//import React from 'react';
const { createElement, render } = wp.element;

export const Accordion = ({ title, elements }) => {
	const handleAccordionClick = e => {
		const target = e.target;

		target.classList.toggle('accordion-btn_open');
	};

	return (
		<div className="accordion">
			<h4 className="title title_fade-s accordion-title">{title}</h4>
			<ul className="accordion-list">
				{elements.map(({ btnTitle, content }) => {
					return (
						<li className="accordion-list__item" key={btnTitle}>
							<button className="accordion-btn" onClick={evt => handleAccordionClick(evt)}>
								{btnTitle}
							</button>
							<div className="accordion-content" dangerouslySetInnerHTML={{ __html: content }} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
