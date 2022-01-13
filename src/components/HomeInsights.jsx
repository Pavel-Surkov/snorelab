import React from 'react';
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
										<a className="link" href="#">
											<h4 className="title home-insights__item-title">{insight.title}</h4>
										</a>
										{insight.text && <p>{insight.text}</p>}
									</div>
									<img
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
			</div>
		</section>
	);
};
