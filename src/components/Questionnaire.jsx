import React from 'react';

export const Questionnaire = ({ questions, btnTitle }) => {
	return (
		<form className="questionnaire-form">
			<ol className="questionnaire-list">
				{questions.map(question => {
					return (
						<li className="questionnaire-list__item" key={question.id}>
							<p>{question.title}</p>
							{question.answers.map(answer => (
								<div className="questionnaire-list__item-answer" key={answer.id}>
									<input type="radio" id={answer.id} name={answer.name} value={answer.value} />
									<label className="radio" htmlFor={answer.id}>
										{answer.value}
									</label>
								</div>
							))}
						</li>
					);
				})}
			</ol>
			<div className="questionnaire-form__submit-wrapper">
				<button type="submit" className="btn btn-arrow questionnaire-form__submit">
					<div>{btnTitle}</div>
				</button>
			</div>
		</form>
	);
};
