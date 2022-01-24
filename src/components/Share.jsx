import React from 'react';
import { shareLinks } from '../helpers/variables';

export const Share = () => {
	return (
		<section className="share">
			<div className="share-wrapper">
				<div className="container">
					<h1 className="title title_fade title_size-l share-title">Share this article</h1>
					<div className="share-links">
						{shareLinks.map(({ icon, link }) => (
							<a className="btn share-links__item" key={link}>
								<div>
									<img src={icon} alt="" />
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
