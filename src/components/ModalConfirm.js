import { Button, Modal } from 'react-bootstrap';
import { deleteUser } from '../service/UseService';

function ModalConfirm(props) {
    const { handleClose, show, dataUserDelete, handleDeleteUser } = props;

    const confirmDelete = async () => {
        let res = await deleteUser(dataUserDelete.id);

        if (res && +res.statusCode === 204) {
            handleDeleteUser(dataUserDelete);
            handleClose();
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <b>Delete a user</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new my-3">
                        This action can't undone ! Do want to delete this user ?
                        <br />
                        <b>Email: {dataUserDelete.email}</b>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => confirmDelete()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalConfirm;
