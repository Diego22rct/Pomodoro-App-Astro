import { useState } from "react";
import Task from "../Tasks/ui/Task";


export default function TaskApp() {
	const [addTask, setAddTask] = useState(false);
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
	console.log(addTask);
	return (
		<div className="flex flex-col justify-center items-center w-full h-full py-5">
			{/*
				TODO: Add functionalty for Todos 
						Delete
						Edit
						Add new todos
			*/}
			<h1 className="text-3xl font-bold">Taks To-Do</h1>
			<div id="tasks" className="my-5">
				{
					Tasks.map((task) => (
						<Task key={task.id} {...task} />
					))
				}
			</div>
			<button className="bg-green-500 text-white py-2 px-4 rounded-md" onClick={() => {
				console.log("Add Task");
				setAddTask(!addTask);
			}}>Add Task</button>
			{addTask && (
				<div className="flex flex-col justify-center items-center w-full h-full py-5">
					<h1 className="text-3xl font-bold">Add Task</h1>
					<div className="flex flex-col justify-center items-center">
						<input type="text" className="border border-gray-300 rounded-md px-2 py-1 w-1/2" placeholder="Title" />
						<input type="text" className="border border-gray-300 rounded-md px-2 py-1 w-1/2" placeholder="Description" />
						<select name="status" className="border border-gray-300 rounded-md px-2 py-1 w-1/2">
							<option value="todo">To-Do</option>
							<option value="in-progress">In-Progress</option>
							<option value="done">Done</option>
						</select>
						<button className="bg-green-500 text-white py-2 px-4 rounded-md">Add Task</button>
					</div>
					<div className="flex justify-center items-center">
						<button className="bg-green-500 text-white py-2 px-4 rounded-md">Cancel</button>
					</div>
				</div>
			)}
		</div>
	);
}
