//import React, { useState, useRef } from 'react';
const { createElement, render } = wp.element;
import paperplane from '../images/form-submit-modal.svg';

export const CareersForm = React.forwardRef((props, ref) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formValues, setFormValues] = useState({
		name: '',
		surname: '',
		email: '',
		subject: '',
		resume: '',
		message: ''
	});

	const uploadInputRef = useRef(null);
	const careersForm = useRef(null);

	const handleInputChange = e => {
		const target = e.target;

		// Name attribute of the target input element must match formValues key
		// to update the state
		const formValuesKey = target.name;

		setFormValues(prev => {
			const newFormValues = Object.assign({}, prev);

			newFormValues[`${formValuesKey}`] = target.value;

			return newFormValues;
		});
	};

	// For uploading resume file
	const handleFileUpload = e => {
		const target = e.target;
		const uploadLabel = target.nextElementSibling;

		const fileName = target.value.split('\\').pop();

		setFormValues(prev => ({
			...prev,
			resume: fileName
		}));

		console.log(formValues.resume);

		uploadLabel.classList.add('careers-form__upload_loaded');
	};

	// For removing resume file
	const handleFileDelete = e => {
		const uploadInput = uploadInputRef.current;
		const uploadLabel = uploadInput.nextElementSibling;

		uploadInput.value = null;
		setFormValues(prev => ({
			...prev,
			resume: ''
		}));

		uploadLabel.classList.remove('careers-form__upload_loaded');
	};

	const handleFormSubmit = e => {
		const blocker = ref.current;

		blocker.classList.add('blocker_open');

		setIsModalOpen(true);

		e.preventDefault();
	};

	const handleModalClose = e => {
		const blocker = ref.current;

		blocker.classList.remove('blocker_open');
		setIsModalOpen(false);
	};

	return (
		<form className="careers-form">
			<div className="careers-form__field">
				<p className="title title_fade careers-form__field-title">First name*</p>
				<span className="careers-form__input-border">
					<input
						className="careers-form__input"
						type="text"
						name="name"
						onChange={evt => handleInputChange(evt)}
						value={formValues.name}
					/>
				</span>
			</div>
			<div className="careers-form__field">
				<p className="title title_fade careers-form__field-title">Last name*</p>
				<span className="careers-form__input-border">
					<input
						className="careers-form__input"
						type="text"
						name="surname"
						onChange={evt => handleInputChange(evt)}
						value={formValues.surname}
					/>
				</span>
			</div>
			<div className="careers-form__field">
				<p className="title title_fade careers-form__field-title">Email*</p>
				<span
					className="careers-form__input-border careers-form__input-error"
					data-error="This field can`t be empty. Please fill in the information."
				>
					<input
						className="careers-form__input"
						type="email"
						name="email"
						onChange={evt => handleInputChange(evt)}
						value={formValues.email}
					/>
				</span>
			</div>
			<div className="careers-form__field">
				<p className="title title_fade careers-form__field-title">Subject*</p>
				<span className="careers-form__input-border">
					<input
						className="careers-form__input"
						type="text"
						name="subject"
						onChange={evt => handleInputChange(evt)}
						value={formValues.subject}
					/>
				</span>
			</div>
			<div className="careers-form__field">
				<p className="title title_fade careers-form__field-title">Attach resume*</p>
				<span
					className="careers-form__input-border careers-form__input-error"
					data-error="Upload failed. Max size for files is 10 MB."
				>
					<input
						className="careers-form__input"
						id="uploadResume"
						type="file"
						name="resume"
						onChange={evt => handleFileUpload(evt)}
						ref={uploadInputRef}
					/>
					<label className="careers-form__upload" htmlFor="uploadResume">
						{formValues.resume}
						<div className="careers-form__upload-btn-wrapper">
							<button
								type="button"
								className="careers-form__upload-btn"
								style={{ display: formValues.resume ? 'inline-block' : 'none' }}
								onClick={evt => handleFileDelete(evt)}
							>
								<span />
								<span />
							</button>
						</div>
					</label>
				</span>
			</div>
			<div className="careers-form__field careers-form__field-message">
				<p className="title title_fade careers-form__field-title">Message*</p>
				<span className="careers-form__input-border">
					<textarea
						className="careers-form__textarea"
						name="message"
						onChange={evt => handleInputChange(evt)}
						value={formValues.message}
					/>
				</span>
			</div>
			<div className="careers-form__submit-wrapper">
				<button type="submit" className="careers-form__submit" onClick={evt => handleFormSubmit(evt)}>
					Send message
				</button>
			</div>
			<div className={`careers-form__modal-wrapper ${isModalOpen ? 'careers-form__modal_open' : ''}`}>
				<div className="careers-form__modal" ref={careersForm}>
					<div className="careers-form__modal-close-wrapper">
						<button
							type="button"
							className="careers-form__modal-close"
							onClick={evt => handleModalClose(evt)}
						>
							<span />
							<span />
						</button>
					</div>
					<img className="careers-form__modal-img" src={paperplane} alt="" />
					<h3 className="title title_size-s careers-form__modal-title">Thank you!</h3>
					<p>We have received your message.</p>
				</div>
			</div>
		</form>
	);
});
