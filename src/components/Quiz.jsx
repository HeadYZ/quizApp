import { useState } from 'react'

import QUESTIONS from '../question.js'
import quizCompleteImg from '../assets/quiz-complete.png'

const Quiz = () => {
	const [userAnswers, setUserAnswers] = useState([])

	const activeQuestionIndex = userAnswers.length

	const handleSelectAnswer = selectedAnswer => {
		setUserAnswers(prevUserAnswers => {
			return [...prevUserAnswers, selectedAnswer]
		})
	}

	const quizIsComplete = activeQuestionIndex === QUESTIONS.length

	if (quizIsComplete) {
		return (
			<div id='summary'>
				<img src={quizCompleteImg} alt='Trophy icon' />
				<h2>Quiz Completed!</h2>
			</div>
		)
	}
	const shuddledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
	shuddledAnswers.sort(() => Math.random() - 0.5)
	return (
		<div id='quiz'>
			<div id='question'>
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id='answers'>
					{shuddledAnswers.map(answer => (
						<li key={answer} className='answer'>
							<button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Quiz
