import type { HTMLProps } from "react";

export default function PauseButton(props: HTMLProps<HTMLButtonElement>) {
	return (
		<button
			className="w-28 border-spacing-0 hover:bg-slate-500"
			{...props}
			type="button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 5.25v13.5m-7.5-13.5v13.5"
				/>
			</svg>
		</button>
	);
}
