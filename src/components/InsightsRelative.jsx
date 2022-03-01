//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { insightArticles } from '@/helpers/variables';

export const InsightsRelative = () => {
	return (
		<section className="insights-relative">
			<div className="insights-relative__wrapper">
				<div className="container">
					<h4 className="title title_fade-s insights-relative__title">Related articles</h4>
					<div className="insights-assess__articles">
						{insightArticles.map(article => {
							const currentArticles = [
								'Snoring Due to a Blocked Nose?',
								'Snoring with an Open Mouth',
								'Overweight and Snoring: A Vicious Circle'
							];

							if (currentArticles.find(title => title === article.title)) {
								return (
									<div className="insights-assess__article" key={article.title}>
										<div className="insights-assess__article-img">
											<LazyLoadImage
												src={article.background['1x']}
												srcSet={`${article.background['1x']} 1x, ${article.background[
													'2x'
												]} 2x`}
												alt=""
											/>
										</div>
										<div className="insights-assess__item-flags">
											{article.flags.map((flag, i, arr) => (
												<span key={flag}>
													<a className="link" href="#">
														{flag}
													</a>
													{i === arr.length - 1 ? '' : ' , '}
												</span>
											))}
										</div>
										<a href="#" className="link">
											<h3 className="title title_size-m insights-assess__article-title">
												{article.title}
											</h3>
										</a>
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
