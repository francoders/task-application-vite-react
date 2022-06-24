import { useState } from "react";
import { Button } from "react-bootstrap";
import { NavBar, TaskForm, ElModal } from "./components";

export default function App() {
	const [showModal, setShowModal] = useState(false);
	const [num, setNum] = useState(0);

	const openCloseModal = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<NavBar openCloseModal={openCloseModal} />
			<ElModal
				show={showModal}
				close={openCloseModal}
				title="Nueva Tarea"
				children={<TaskForm />}
			/>
		</>
	);
}
