import { useEffect, useState } from 'react'

const QuestionTimer = ({ timeout, onTimeout }) => {
	const [remainingTime, setRemainingTime] = useState(timeout)
	useEffect(() => {
		setTimeout(onTimeout, timeout)
	}, [timeout, onTimeout])

	useEffect(() => {
		const timer = setInterval(() => {
			setRemainingTime(prevRemeiningTime => prevRemeiningTime - 100)
		}, 100)
		if (remainingTime <= 0) {
			clearInterval(timer)
			setRemainingTime(timeout)
		}
	}, [])

	return <progress value={remainingTime} max={timeout} id='question-time'></progress>
}

export default QuestionTimer
