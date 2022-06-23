import React from "react";
import { Modal } from "react-bootstrap";
import { PropsTypes } from "./Modal.types";

export function ElModal(props: PropsTypes) {
	const { show, close, title, children } = props;

	return (
		<Modal show={show} onHide={close}>
			<Modal.Header>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
		</Modal>
	);
}
