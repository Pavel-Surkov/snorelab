export const calculateSlidesPerView = () => {
	const viewportWidth = window.innerWidth;

	if (viewportWidth >= 1450) {
		return 3.5;
	} else if (viewportWidth >= 991) {
		return 3.05;
	} else if (viewportWidth >= 767) {
		return 2;
	} else if (viewportWidth >= 576) {
		return 1.5;
	} else {
		return 1;
	}
};
