import React from 'react';
//const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { insightArticles } from '@/helpers/variables';

export const InsightsArticles = () => {
	return (
		<section className="insights-articles">
			<div className="insights-articles__wrapper">
				<div className="container">
					<h2 className="title title_fade-s insights-articles__title">All articles</h2>
					<ul className="insights-articles__list">
						{insightArticles.map(article => {
							return (
								<li className="insights-articles__item-wrapper" key={article.title}>
									<div className="insights-articles__item">
										<div className="order-lg-1 insights-articles__item-img">
											<LazyLoadImage
												src={article.background['1x']}
												srcSet={`${article.background['1x']} 1x, ${article.background[
													'2x'
												]} 2x`}
												alt=""
											/>
										</div>
										<div className="insights-articles__item-content">
											<div className="order-lg-0 insights-articles__item-flags">
												{/* This method adds flag links and adds commas correctly */}
												{article.flags.map((flag, i, arr) => (
													<span key={flag}>
														<a className="link" href="#">
															{flag}
														</a>
														{i === arr.length - 1 ? '' : ' , '}
													</span>
												))}
											</div>
											<a href="#">
												<h3 className="link title title_size-m insights-articles__item-title">
													{article.title}
												</h3>
											</a>
											<p>{article.text}</p>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
					<div className="insights-articles__show">
						<button className="btn btn-arrow insights-articles__show-btn">
							<div>Show more</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
