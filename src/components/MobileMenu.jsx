import React from 'react';
import { navigationLinks } from '../helpers/variables';

export const MobileMenu = React.forwardRef((props, menuElement) => {
	return (
		<div ref={menuElement} className="m-menu">
			<div className="m-menu__wrapper">
				<nav className="navigation m-menu__navigation">
					<ul className="m-menu__navigation-list">
						{navigationLinks.map(({ text, link }) => {
							return (
								<li className="m-menu__navigation-item" key={text}>
									<a href={link} className="link">
										{text}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
});