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
        {isPlaying ? "Pause" : "Play"}
      </Button>

      <Button onClick={() => reset()}>Reset</Button>
    </div>
  );
}
