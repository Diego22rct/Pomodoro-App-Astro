import type { HTMLProps } from "react";

export default function PlayButton(props: HTMLProps<HTMLButtonElement>) {
  return (
    <button
      className="w-28 text-center border-spacing-0 hover:bg-slate-500 hover:text-white rounded-md px-2 py-1"
      {...props}
      type="button"
    >
      <svg
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
      </svg>
    </button>
  );
}
