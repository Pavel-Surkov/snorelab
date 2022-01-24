import React from 'react';

export const InsightReview = () => {
	return (
		<section className="insight-review">
			<div className="insight-review__wrapper">
				<div className="container">
					<h3 className="title title_fade-s insight-review__title">
						Let us know if you liked the post. That’s the only way we can improve.
					</h3>
					<div className="insight-review__note">
						<p>Was this post helpful?</p>
					</div>
					<div className="insight-review__btns">
						<a href="#" className="link btn btn-arrow insight-review__btn">
							<div>Yes</div>
						</a>
						<a href="#" className="link btn btn-arrow btn_gray-text insight-review__btn">
							<div>No</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
