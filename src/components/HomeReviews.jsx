import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { reviews } from '../helpers/variables';
import { calculateSlidesPerView } from '../helpers/functions';

export const HomeReviews = React.memo(() => {
	const [slidesPerView, setSlidesPerView] = useState(0);

	window.addEventListener('resize', () => {
		const slidesCount = calculateSlidesPerView();
		setSlidesPerView(slidesCount);
	});

	useEffect(() => {
		const slidesCount = calculateSlidesPerView();
		setSlidesPerView(slidesCount);
	}, []);

	return (
		<section className="home-reviews">
			<div className="home-reviews__wrapper">
				<h2 className="title title_fade title_size-m home-reviews__title">App User Reviews</h2>
				<Swiper
					spaceBetween={12}
					slidesPerView={slidesPerView}
					onSwiper={swiper => console.log(swiper)}
					pagination={{ clickable: true }}
					loop={true}
					initialSlide={2}
					centeredSlides={true}
				>
					{reviews.map(review => {
						const starsCount = review.stars;
						const starsArr = [];

						for (let i = 0; i < starsCount; i++) {
							starsArr.push(i);
						}

						return (
							<SwiperSlide key={review.title}>
								<div className="home-reviews__item">
									<div className="home-reviews__stars">
										{starsArr.map(star => (
											<span className="star-wrapper" key={star}>
												<svg
													width="23"
													height="23"
													viewBox="0 0 23 23"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M11.25 0.899902L14.3717 8.35321L22.4249 9.01895L16.3011 14.2911L18.1565 22.1559L11.25 17.9609L4.34352 22.1559L6.19894 14.2911L0.0750856 9.01895L8.12827 8.35321L11.25 0.899902Z"
														fill="#FED301"
													/>
												</svg>
											</span>
										))}
									</div>
									<p>{review.text}</p>
									<div className="home-reviews__title">
										<img
											src={review.icon}
											srcSet={`${review.icon} 1x, ${review.icon_2x} 2x`}
											alt="reviewer"
										/>
										<h5 className="title">{review.title}</h5>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
});
