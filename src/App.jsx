import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { Home } from './pages';

// const App = () => {
// 	return (
// 		<BrowserRouter basename="/dist/">
// 			<div className="app-container">
// 				<Header />
// 				<Routes>
// 					<Route path="/" element={<Home />} />
// 				</Routes>
// 				<Footer />
// 			</div>
// 		</BrowserRouter>
// 	);
// };

import ReactDOM from 'react-dom';
import { Home, HowWorks } from './pages';

const PAGES = {
	Home,
	HowWorks
};

const renderPageElement = el => {
	const Page = PAGES[el.id];
	if (!Page) return;

	const props = Object.assign({}, el.dataset);

	ReactDOM.render(<Page {...props} />, el);
};

export default renderPageElement;
