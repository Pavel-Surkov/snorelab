import React from 'react';
//const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { homeInsights } from '../helpers/variables';

export const HomeInsights = () => {
	return (
		<section className="home-insights">
			<div className="home-insights__wrapper">
				<div className="container">
					<h2 className="title title_fade title_size-m home-insights__title">Snoring insights</h2>
					<div className="home-insights__container">
						{homeInsights.map(insight => {
							const currentClass = insight.big
								? 'home-insights__item home-insights__item_big'
								: 'home-insights__item';

							return (
								<div className={currentClass} key={insight.title}>
									<div className="home-insights__item-content">
										<div className="home-insights__item-flags">
											{/* This method adds flag links and adds commas correctly */}
											{insight.flags.map((flag, i, arr) => (
												<span key={flag}>
													<a className="link" href="#">
														{flag}
													</a>
													{i === arr.length - 1 ? '' : ', '}
												</span>
											))}
										</div>
										<a className="link home-insights__item-title" href="#">
											<h4 className="title">{insight.title}</h4>
										</a>
										{insight.text && <p>{insight.text}</p>}
									</div>
									<LazyLoadImage
										src={insight.background['1x']}
										srcSet={`${insight.background['1x']} 1x, ${insight.background['2x']} 2x`}
										alt=""
									/>
									<div className="home-insights__item-fade" />
								</div>
							);
						})}
					</div>
					<div className="home-insights__read-more">
						<a className="link btn btn-arrow" href="insights.html">
							<div>Read more</div>
						</a>
					</div>
				</div>
				<svg
					data-svg="decorative"
					width="379"
					height="371"
					viewBox="0 0 379 371"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<ellipse cx="189.5" cy="185.5" rx="189.5" ry="185.5" fill="#17A2FF" />
				</svg>
			</div>
		</section>
	);
};
