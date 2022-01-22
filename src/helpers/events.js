window.onload = () => {
	const imageBlocks = document.querySelectorAll('.insight-img_with-note');

	if (imageBlocks) {
		imageBlocks.forEach(block => {
			const blockChildren = Array.from(block.children);
			const image = blockChildren.find(el => el.matches('img'));

			const imageWidth = image.clientWidth;

			const textBlocks = blockChildren.filter(el => el.matches('p'));
			textBlocks.forEach(text => (text.style.width = imageWidth + 'px'));
		});
	}
};
