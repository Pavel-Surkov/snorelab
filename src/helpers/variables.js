// Description icons
import description_1 from '../images/icons/description1.svg';
import description_2 from '../images/icons/description2.svg';
import description_3 from '../images/icons/description3.svg';
import description_4 from '../images/icons/description4.svg';
import description_5 from '../images/icons/description5.svg';
import description_6 from '../images/icons/description6.svg';

// Reviews icons
import review_1 from '../images/icons/review1.png';
import review_1_2x from '../images/icons/review1@2x.png';
import review_2 from '../images/icons/review2.png';
import review_2_2x from '../images/icons/review2@2x.png';
import review_3 from '../images/icons/review3.png';
import review_3_2x from '../images/icons/review3@2x.png';

// Partner app description icons
import p_description_1 from '../images/icons/p-description1.svg';
import p_description_2 from '../images/icons/p-description2.svg';
import p_description_3 from '../images/icons/p-description3.svg';
import p_description_4 from '../images/icons/p-description4.svg';

export const navigationLinks = [
	{ text: 'How SnoreLab Works', link: 'howworks.html' },
	{ text: 'Insights', link: '##' },
	{ text: 'Remedy Shop', link: '##' },
	{ text: 'FAQ', link: '##' },
	{ text: 'Reviews', link: '##' },
	{ text: 'Contact Us', link: '##' }
];

export const descriptionCards = [
	{
		icon: `${description_4}`,
		title: 'Effective algorithms',
		text:
			'SnoreLab gives measurements of snoring intensity and duration. How high is your Snore Score? Try and reduce it!'
	},
	{
		icon: `${description_6}`,
		title: 'Clear Recordings',
		text: 'Tap the chart to hear samples of your snoring or optionally record the whole night to hear every breath.'
	},
	{
		icon: `${description_1}`,
		title: 'Easy to Use',
		text:
			'Simply press start and place the device next to your bed. No calibration is required. SnoreLab has monitored more than 20 million nights of sleep!'
	},
	{
		icon: `${description_5}`,
		title: 'Discover Solutions',
		text:
			"The app contains information on snoring remedy options and factors that influence snoring. We've helped hundreds of thousands of users reduce their snoring."
	},
	{
		icon: `${description_2}`,
		title: 'Trends Area',
		text: 'Compare your snoring over time and evaluate the effective of remedies and lifestyle changes.'
	},
	{
		icon: `${description_3}`,
		title: 'Doctor Recommended',
		text:
			'Many doctors, dentists and sleep professionals encourage their patients to use SnoreLab to assist their consultations and to measure the success of treatments.'
	}
];

export const partnerDescriptionCards = [
	{
		icon: `${p_description_4}`,
		title: 'Work into your daily routine',
		text: 'SnoreGym’s quick 5, 10 or 15 minute workouts can be easily integrated into your daily routine.'
	},
	{
		icon: `${p_description_3}`,
		title: 'Easy-to-follow animations',
		text: 'SnoreGym guides you throught each exercise with real-time animations.'
	},
	{
		icon: `${p_description_1}`,
		title: 'Hits and tips',
		text: 'Get the most out of your workout with handy tips.'
	},
	{
		icon: `${p_description_2}`,
		title: 'Proven snoring-reduction technique',
		text:
			'Multiple scentific studies have shown that mouth exercises are an effective way to manage snoring and sleep apnea.'
	}
];

export const reviews = [
	{
		stars: 5,
		title: 'Snore tastic!',
		text:
			'This must be one of the best apps out there. Totally brilliant and so simple to use. It’s very odd hearing yourself…and what others hear…but cannot recommend this app enough. A million gold stars!!',
		icon: `${review_1}`,
		icon_2x: `${review_1_2x}`
	},
	{
		stars: 5,
		title: 'Saved me',
		text:
			'This app may have literally saved my life. My wife and daughter told me for years that I made awful noises in my sleep. I downloaded this app. For the first time I could hear what I sounded like in my sleep. Absolutely horrifying. My CPAP machine is on its way. Thank you.',
		icon: `${review_3}`,
		icon_2x: `${review_3_2x}`
	},
	{
		stars: 5,
		title: 'Saved my life',
		text:
			'This app may have literally saved my life. My wife and daughter told me for years that I made awful noises in my sleep. I downloaded this app. For the first time I could hear what I sounded like in my sleep. Absolutely horrifying. My CPAP machine is on its way. Thank you.',
		icon: `${review_3}`,
		icon_2x: `${review_3_2x}`
	},
	{
		stars: 5,
		title: 'Saved life',
		text:
			'This app may have literally saved my life. My wife and daughter told me for years that I made awful noises in my sleep. I downloaded this app. For the first time I could hear what I sounded like in my sleep. Absolutely horrifying. My CPAP machine is on its way. Thank you.',
		icon: `${review_3}`,
		icon_2x: `${review_3_2x}`
	},
	{
		stars: 5,
		title: 'Inspired me to loose weight',
		text:
			'SnoreLab has helped me track my snoring problem and to realize that it was a weight issue and now I have successfully stopped snoring with some weight loss and constant monitoring from SnoreLab.',
		icon: `${review_2}`,
		icon_2x: `${review_2_2x}`
	}
];
