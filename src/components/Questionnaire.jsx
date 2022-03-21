import React from 'react';
//const { createElement, render } = wp.element;

export const Questionnaire = ({ questionsType, questions, btnTitle }) => {
  let questionsArray = [];

  console.log(questionsType, questions);

  if (questionsType && questions) {
    questionsArray = questions[0].acf[`${questionsType}_questions`];
  }

  if (!questions) {
    return <h2 className="title title_size-l">Loading...</h2>;
  }

  return (
    <form className="questionnaire-form">
      <ol className="questionnaire-list">
        {questionsArray.map((question, i) => {
          return (
            <li
              className="questionnaire-list__item"
              key={question.question_slug}
            >
              <p>{question.question_title}</p>
              {question.question_answers.map((answer, idx) => {
                return (
                  <div
                    className="questionnaire-list__item-answer"
                    key={answer[`${questionsType}_question_answer`]}
                  >
                    <input
                      type="radio"
                      id={String(i) + idx}
                      name={question.question_slug}
                      value={answer[`${questionsType}_question_answer`]}
                    />
                    <label className="radio" htmlFor={String(i) + idx}>
                      {answer[`${questionsType}_question_answer`]}
                    </label>
                  </div>
                );
              })}
            </li>
          );
        })}
      </ol>
      <div className="questionnaire-form__submit-wrapper">
        <button
          type="submit"
          className="btn btn-arrow questionnaire-form__submit"
        >
          <div>{btnTitle}</div>
        </button>
      </div>
    </form>
  );
};
