import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useTimer } from "@/hooks/useTimer";
import { Button } from "@/components/ui/button";

export default function Timer() {
  const { time, isPlaying, play, pause, reset, isFinished, Percent } = useTimer(
    25 * 60,
  );

  const minutes = Math.floor(time / 60).toString();
  const seconds = (time % 60).toString().padStart(2, "0");
  // console.log(isFinished);
  return (
    <div className="flex flex-col items-center justify-center w-2/5 py-4">
      <CircularProgressbar
        value={Percent}
        text={
          isPlaying? `${minutes}:${seconds}` : isFinished? "Finished" : `${minutes}:${seconds}`
        }
        styles={buildStyles({
          textColor: "#000",
          pathColor: "#000",
          trailColor: "transparent",
        })}
      />

      {/* <PlayButton
				className="hover:scale-110"
				disabled={isFinished}
				type="button"
				onClick={play}
			/>

			<PauseButton className="hover:scale-110" type="button" onClick={pause} /> */}

      <Button
        className="hover:scale-110"
        disabled={isFinished}
          type="button"
        onClick={() => {
          console.log(isPlaying);
          if (!isPlaying) {
            play();
            console.log("play");
          } else {
            pause();
            console.log("pause");
          }
        }}
      >
        {isPlaying ?       <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25v13.5m-7.5-13.5v13.5"
        />
      </svg> : <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </svg>}
      </Button>

      <Button onClick={() => reset()}>Reset</Button>
    </div>
  );
}
