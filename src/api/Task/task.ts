import { TaskTypes } from "./task.types";

const TASKS = "tasks";

export class Task {
	constructor() {}

	create(params: TaskTypes.Create) {
		//  params.description
		console.log("creando Task");
		const newData = {
			...params,
		};
		const saveData = JSON.stringify(newData);
		localStorage.setItem(TASKS, saveData);
	}
}
