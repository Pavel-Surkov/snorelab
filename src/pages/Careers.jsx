import React, { useRef } from 'react';
//const { createElement, render, useRef } = wp.element;
import { CareersPage } from '../components/CareersPage';

export const Careers = () => {
	const blockerRef = useRef(null);

	return (
		<main className="careers">
			<CareersPage ref={blockerRef} />
			<div className="blocker" ref={blockerRef} />
		</main>
	);
};
