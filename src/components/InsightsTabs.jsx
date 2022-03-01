//import React, { useState, useEffect, useRef } from 'react';
const { createElement, render, useState, useEffect, useRef } = wp.element;
import { insightTabs, m_insightTabs } from '../helpers/variables';

export const InsightsTabs = () => {
	const [tabsArr, setTabsArr] = useState(insightTabs);
	const [activeTab, setActiveTab] = useState(null);

	const tabsContainerRef = useRef(null);

	useEffect(() => {
		const activeTab = document.querySelectorAll('.tabs-btn_active');

		if (activeTab) {
			setActiveTab(activeTab);
		}
	}, []);

	useEffect(
		() => {
			if (window.innerWidth < 991) {
				tabsArr === m_insightTabs ? false : setTabsArr(m_insightTabs);
			} else {
				tabsArr === insightTabs ? false : setTabsArr(insightTabs);
			}
		},
		[window.innerWidth]
	);

	const handleTabsClick = e => {
		const target = e.target.closest('.tabs-btn');

		if (target) {
			const tabs = Array.from(tabsContainerRef.current.children);
			tabs.forEach(tab => tab.classList.remove('tabs-btn_active'));

			target.classList.add('tabs-btn_active');

			setActiveTab(target);
		}
	};

	return (
		<section className="insights-tabs">
			<div className="insights-tabs__wrapper">
				<div className="container">
					<div className="insights-tabs__content">
						<h1 className="title title_fade title_size-l insights-tabs__title">Insights</h1>
						<div ref={tabsContainerRef} onClick={evt => handleTabsClick(evt)} className="tabs-container">
							{tabsArr.map(tab => {
								{
									/* Adds ref to default active tab */
								}
								const classList =
									tab.text.toLowerCase() === 'all' ? 'btn tabs-btn tabs-btn_active' : 'btn tabs-btn';

								return (
									<a href="#" className={classList} key={tab.text}>
										<div>{tab.text}</div>
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
