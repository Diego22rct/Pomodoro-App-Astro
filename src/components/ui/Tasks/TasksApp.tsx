import { useState } from "react";
import { Button } from "../button";

export default function TaskApp() {
	const [Tasks, setTasks] = useState([
		{
			id: 1,
			title: "Task 1",
			description: "This is task 1",
			status: "todo",
		},
		{
			id: 2,
			title: "Task 2",
			description: "This is task 2",
			status: "todo",
		},
		{
			id: 3,
			title: "Task 3",
			description: "This is task 3",
			status: "todo",
		},
		{
			id: 4,
			title: "Task 4",
			description: "This is task 4",
			status: "todo",
		},
		{
			id: 5,
			title: "Task 5",
			description: "This is task 5",
			status: "todo",
		},
		{
			id: 6,
			title: "Task 6",
			description: "This is task 6",
			status: "todo",
		},
	]);
	return (
		<>
		<h1 className="text-3xl font-bold">Taks To-Do</h1>
		<div id="tasks" className="my-5">
			{
				Tasks.map((task) => (
					<div id={task.id.toString()} className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
						<div className="inline-flex items-center space-x-2">
							<h1 className="text-2xl font-bold">{task.title}</h1>
							<p className="text-lg">{task.description}</p>
							<Button>
								✅
							</Button>
						</div>
					</div>
				))
			}
			</div>
		</>
	);
}
