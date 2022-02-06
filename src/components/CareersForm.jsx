import React, { useState, useRef } from 'react';

export const CareersForm = () => {
	const [uploadFileValue, setUploadFileValue] = useState(' ');

	const uploadInputRef = useRef(null);

	const handleFileUpload = e => {
		const target = e.target;
		const uploadLabel = target.nextElementSibling;

		const fileName = target.value.split('\\').pop();
		setUploadFileValue(fileName);

		uploadLabel.classList.add('careers-form__upload_loaded');
	};

	const handleDeleteFile = e => {
		const uploadInput = uploadInputRef.current;
		const uploadLabel = uploadInput.nextElementSibling;

		uploadInput.value = null;
		setUploadFileValue(' ');

		uploadLabel.classList.remove('careers-form__upload_loaded');
	};

	return (
		<form className="careers-form">
			<div className="careers-form__field">
				<p className="title title_fade careers-form__field-title">First name*</p>
				<span className="careers-form__input-border">
					<input className="careers-form__input" type="text" name="name" />
				</span>
			</div>
			<div className="careers-form__field">
				<p className="title title_fade careers-form__field-title">Last name*</p>
				<span className="careers-form__input-border">
					<input className="careers-form__input" type="text" name="surname" />
				</span>
			</div>
			<div className="careers-form__field">
				<p className="title title_fade careers-form__field-title">Email*</p>
				<span className="careers-form__input-border">
					<input className="careers-form__input" type="email" name="email" />
				</span>
			</div>
			<div className="careers-form__field">
				<p className="title title_fade careers-form__field-title">Subject*</p>
				<span className="careers-form__input-border">
					<input className="careers-form__input" type="text" name="subject" />
				</span>
			</div>
			<div className="careers-form__field">
				<p className="title title_fade careers-form__field-title">Attach resume*</p>
				<span className="careers-form__input-border">
					<input
						className="careers-form__input"
						id="uploadResume"
						type="file"
						name="resume"
						onChange={evt => handleFileUpload(evt)}
						ref={uploadInputRef}
					/>
					<label className="careers-form__upload" htmlFor="uploadResume">
						{uploadFileValue}
						<div className="careers-form__upload-btn-wrapper">
							<button
								type="button"
								className="careers-form__upload-btn"
								style={{ display: uploadFileValue === ' ' ? 'none' : 'inline-block' }}
								onClick={evt => handleDeleteFile(evt)}
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
					<textarea className="careers-form__textarea" name="message" />
				</span>
			</div>
			<div className="careers-form__submit-wrapper">
				<button type="submit" className="careers-form__submit">
					Send message
				</button>
			</div>
		</form>
	);
};
