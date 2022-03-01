//import React from 'react';
const { createElement, render } = wp.element;
import { HomeMain } from '../components/HomeMain';
import { HomeDescription } from '../components/HomeDescription';
import { HomeReviews } from '../components/HomeReviews';
import { PartnerApp } from '../components/PartnerApp';
import { HomeInsights } from '../components/HomeInsights';

export const Home = () => {
	return (
		<main className="home">
			<HomeMain />
			<HomeDescription />
			<HomeReviews />
			<PartnerApp />
			<HomeInsights />
			<svg
				data-svg="home-decorative"
				width="872"
				height="829"
				viewBox="0 0 872 829"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M435.752 0L538.523 316.299L871.099 316.299L602.04 511.782L704.811 828.08L435.752 632.597L166.692 828.08L269.464 511.782L0.403961 316.299L332.98 316.299L435.752 0Z"
					fill="url(#paint0_linear_96_393)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_96_393"
						x1="449.192"
						y1="417.574"
						x2="75.7586"
						y2="256.633"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#1F12D3" />
						<stop offset="1" stopColor="#3FAFDE" />
					</linearGradient>
				</defs>
			</svg>
			<svg
				data-svg="home-decorative"
				width="872"
				height="829"
				viewBox="0 0 872 829"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M435.752 0L538.523 316.299L871.099 316.299L602.04 511.782L704.811 828.08L435.752 632.597L166.692 828.08L269.464 511.782L0.403961 316.299L332.98 316.299L435.752 0Z"
					fill="url(#paint0_linear_96_393)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_96_393"
						x1="449.192"
						y1="417.574"
						x2="75.7586"
						y2="256.633"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#1F12D3" />
						<stop offset="1" stopColor="#3FAFDE" />
					</linearGradient>
				</defs>
			</svg>
		</main>
	);
};
