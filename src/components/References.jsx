import React from 'react';
//const { createElement, render } = wp.element;

export const References = () => {
	return (
		<section className="references">
			<div className="references-wrapper">
				<div className="container">
					<h3 className="title references-title">References</h3>
					<ol className="references-list">
						<li className="references-list__item">
							Baz H, et al. The role of oral myofunctional therapy in managing patients with mild to
							moderate obstructive sleep apnea. PAN&nbsp;Arab Journal of Rhinology 2012; 2(1): 17-22.
						</li>
						<li className="references-list__item">
							Verma RK, et al. Oropharyngeal exercises in the treatment of&nbsp;obstructive sleep apnoea:
							our experience. Sleep & Breathing 2016; 20(4); 1193-1201.
						</li>
						<li className="references-list__item">
							Lee SH, et al. How Does Open-Mouth Breathing Influence Upper Airway Anatomy? The
							Laryngoscope 2007; 117: 1102-1106.{' '}
							<a href="#" className="link">
								https://doi.org/10.1097/MLG.0b013e318042aef7
							</a>
						</li>
					</ol>
				</div>
			</div>
		</section>
	);
};
