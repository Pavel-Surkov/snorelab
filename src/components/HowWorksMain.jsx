import React from 'react';
import dashboard from '../images/Dashboard.png';
import dashboard_2x from '../images/Dashboard@2x.png';

export const HowWorksMain = () => {
	return (
		<section className="how-works-main">
			<div className="how-works-main__wrapper">
				<div className="container">
					<div className="how-works-main__info">
						<h1 className="title title_fade title_size-l how-works-main__title">How SnoreLab Works</h1>
						<p>
							SnoreLab is an app that records your snoring, giving you objective data to help find the
							solutions that work for you.
							<br />
							This is our concise guide to getting started with SnoreLab…
						</p>
					</div>
					<div className="examples">
						<div className="row">
							<div className="col-12 col-lg-6">
								<div className="example">
									<h3 className="title title_size-s example-title">
										Anti-snoring remedies and techniques
									</h3>
									<p>
										By measuring nightly changes in your snoring intensity with SnoreLab, you can
										try different anti-snoring remedies and techniques and hopefully discover one
										which really works.
									</p>
									<div className="example-img how-works-main__example-img">
										<img src={dashboard} srcSet={`${dashboard} 1x, ${dashboard_2x} 2x`} alt="" />
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-6">
								<div className="example" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
