export const calculateSlidesPerView = () => {
	const viewportWidth = window.innerWidth;

	if (viewportWidth >= 1450) {
		return 3.2;
	} else if (viewportWidth >= 1220) {
		return 2.5;
	} else if (viewportWidth >= 767) {
		return 2;
	} else if (viewportWidth >= 576) {
		return 1.6;
	} else if (viewportWidth >= 450) {
		return 1.15;
	} else {
		return 1.2;
	}
};
