import { FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";

export function TaskForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<Form onSubmit={onSubmit}>
			<Form.Control
				type="text"
				placeholder="Titulo de la tarea"
				className="mb-3"
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
