import { useCallback, useState, useEffect } from "react";

/**
 * Custom hook that provides timer functionality.
 *
 * @returns An object containing timer state and functions to control the timer.
 */
export function useTimer(timerDuration: number = 25 * 60) {
	// Timer state

	const [time, setTime] = useState(timerDuration);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const [isReset, setIsReset] = useState(false);

	// Timer control functions
	const play = useCallback(() => {
		setIsPlaying(true);
	}, []);

	const pause = useCallback(() => {
		setIsPaused(true);
	}, []);

	const reset = useCallback(() => {
		setIsReset(true);
		setTime(timerDuration); // reset time to timerDuration
	}, []);

	const finish = useCallback(() => {
		setIsFinished(true);
	}, []);

	const tick = useCallback(() => {
		if (time > 0) {
			setTime(time - 1);
		} else {
			finish();
		}
	}, [time, finish]);

	// Interval to call tick every second
	useEffect(() => {
		const interval = setInterval(() => {
			if (isPlaying && !isPaused) {
				tick();
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [isPlaying, isPaused, tick]);

	return {
		time,
		isPlaying,
		isPaused,
		isFinished,
		isReset,
		play,
		pause,
		reset,
		finish,
		tick,
	};
}
