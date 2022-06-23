import { useState } from "react";
import { NavBar, TaskForm, ElModal } from "./components";

export default function App() {
	const [showModal, setShowModal] = useState(false);

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
