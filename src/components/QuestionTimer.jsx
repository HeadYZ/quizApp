import { useEffect, useState } from 'react'

const QuestionTimer = ({ timeout, onTimeout }) => {
	const [remainingTime, setRemainingTime] = useState(timeout)
	useEffect(() => {
		const timer = setTimeout(onTimeout, timeout)
		return () => {
			clearTimeout(timer)
		}
	}, [timeout, onTimeout])

	useEffect(() => {
		const timer = setInterval(() => {
			setRemainingTime(prevRemeiningTime => prevRemeiningTime - 100)
		}, 100)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return <progress value={remainingTime} max={timeout} id='question-time'></progress>
}

export default QuestionTimer
