import React, { useState, useEffect } from 'react';

export const InsightSection = props => {
	const [customMargin, setCustomMargin] = useState('auto');

	useEffect(() => {
		if (window.innerWidth > 991) {
			setCustomMargin(props.marginBottom || 'auto');
		}
	}, []);

	return (
		<section className="insight-section">
			<div className="insight-section__wrapper">
				<div className="container">
					<h2
						className="title title_size-m insight-section__title"
						style={{ marginBottom: `${customMargin}px` }}
					>
						{props.title}
					</h2>
					{props.children}
				</div>
			</div>
		</section>
	);
};
