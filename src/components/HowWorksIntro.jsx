//import React from 'react';
const { createElement, render } = wp.element;

export const HowWorksBottom = () => {
	return (
		<React.Fragment>
			<section className="how-works__intro">
				<div className="how-works__intro-wrapper">
					<div className="container">
						<h3 className="title title_fade-s how-works__intro-title">
							This is a short introduction to SnoreLab
						</h3>
						<div className="how-works__intro-text">
							<svg
								width="1169"
								height="218"
								viewBox="0 0 1169 218"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M819.122 0L759.395 83.2686L1169 119.509L722.482 134.731L662.755 218L446.518 144.139L0 159.362L312.877 98.4911L96.6401 24.6305L506.245 60.8708L819.122 0Z"
									fill="#1A25EF"
									fillOpacity="0.8"
								/>
							</svg>
							<p>
								There are lots of other features and tools in&nbsp;the app. You can find out more about
								these and how to interpret your results in our{' '}
								<a className="link" href="faq.html">
									FAQs
								</a>
								<br />
								You can also get in touch with us&nbsp;on{' '}
								<a className="link" href="mailto:support@snorelab.com">
									support@snorelab.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="how-works__review">
				<div className="how-works__review-wrapper">
					<div className="container">
						<h3 className="title title_fade-s how-works__review-title">Was this post helpful?</h3>
						<div className="how-works__review-note">
							<p>Let us know if you liked the post. That’s the only way we can improve.</p>
						</div>
						<div className="how-works__review-btns">
							<a href="#" className="link btn btn-arrow how-works__review-btn">
								<div>Yes</div>
							</a>
							<a href="#" className="link btn btn-arrow btn_gray-text how-works__review-btn">
								<div>No</div>
							</a>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};
