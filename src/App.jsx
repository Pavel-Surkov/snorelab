import React from 'react';
import ReactDOM from 'react-dom';

import './helpers/events';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home, HowWorks, Reviews, Insights, Insight, StopBang, Epworth, Faq } from './pages';

const PAGES = {
	Home,
	HowWorks,
	Reviews,
	Insights,
	Insight,
	StopBang,
	Epworth,
	Faq
};

const renderPageElement = el => {
	const Page = PAGES[el.id];

	if (!Page) {
		return;
	}

	const props = Object.assign({}, el.dataset);

	const App = () => (
		<div className="app-wrapper">
			<Header />
			<Page {...props} />
			<Footer />
		</div>
	);

	ReactDOM.render(<App {...props} />, el);
};

export default renderPageElement;
