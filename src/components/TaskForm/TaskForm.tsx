import { FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
import classNames from "classnames";
import { Task } from "../../api";
import "./TaskForm.style.scss";
import { PropsTypes } from "./TaskForm.types";

const taskActions = new Task();

export function TaskForm(props: PropsTypes) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState(false);

	const { close } = props;

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError(false);
		if (title) {
			taskActions.create({ title, description });
			close();
		} else {
			setError(true);
		}
	};

	return (
		<Form onSubmit={onSubmit}>
			<Form.Control
				type="text"
				placeholder="Titulo de la tarea"
				className={classNames("mb-3", {
					error: error,
				})}
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<Form.Control
				as="textarea"
				placeholder="Descripcion de la tarea"
				className="mb-3"
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>
			<div className="d-grid gap-2">
				<Button type="submit">Crear</Button>
			</div>
		</Form>
	);
}
