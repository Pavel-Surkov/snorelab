import React from 'react';
import stop_bang from '@/images/stop-bang.png';
import stop_bang_2x from '@/images/stop-bang@2x.png';
import screening from '@/images/screening.png';
import screening_2x from '@/images/screening@2x.png';

// TODO: Make this component reusable
export const InsightsAssess = () => {
	return (
		<section className="insights-assess">
			<div className="insights-assess__wrapper">
				<div className="container">
					<div className="insights-assess__content">
						<svg
							width="1122"
							height="425"
							viewBox="0 0 1122 425"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M786.189 0L728.863 162.336L1122 232.988L693.434 262.664L636.109 425L428.566 281.006L0 310.683L300.297 192.012L92.7547 48.0183L485.891 118.67L786.189 0Z"
								fill="#1A25EF"
								fillOpacity="0.6"
							/>
						</svg>
						<h2 className="title title_fade title_size-l insights-assess__title">
							Assess your sleep apnea risk
						</h2>
						<div className="insights-assess__articles">
							<a href="stopbang.html" className="insights-assess__article">
								<div className="insights-assess__article-img">
									<img
										loading="lazy"
										src={stop_bang}
										srcSet={`${stop_bang} 1x, ${stop_bang_2x} 2x`}
										alt=""
									/>
								</div>
								<h3 className="title title_size-m insights-assess__article-title">
									Answer the Stop-BANG Questionnaire
								</h3>
							</a>
							<a href="#" className="insights-assess__article">
								<div className="insights-assess__article-img">
									<img
										loading="lazy"
										src={screening}
										srcSet={`${screening} 1x, ${screening_2x} 2x`}
										alt=""
									/>
								</div>
								<h3 className="title title_size-m insights-assess__article-title">
									Screening dor Sleep Apnea: Epworth Sleepiness Scale
								</h3>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
