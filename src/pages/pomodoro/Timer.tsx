import PlayButton from "@/components/ui/pomodoro/PlayButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useTimer } from "@/hooks/useTimer";

export default function Timer() {
	const { time, isPlaying, play, pause, reset, isFinished } = useTimer();

	const minutes = Math.floor(time / 60).toString();
	const seconds = (time % 60).toString().padStart(2, "0");
	return (
		<div className="flex flex-col items-center justify-center w-2/5">
			<CircularProgressbar
				value={time}
				text={
					isPlaying
						? `${minutes}:${seconds}`
						: isFinished
						? "Finished!"
						: "Press play"
				}
				styles={buildStyles({
					textColor: "#000",
					pathColor: "#000",
					trailColor: "transparent",
				})}
			/>

			<PlayButton
				onClick={() => {
					if (!isPlaying) {
						play();
					} else {
						pause();
					}
				}}
			/>

			<button onClick={() => pause()}>Pause</button>

			<button onClick={() => reset()}>Reset</button>
		</div>
	);
}
