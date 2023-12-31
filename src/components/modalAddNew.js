import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { postCreateUser } from '../service/UseService';

function ModalAddNew(props) {
    const { handleClose, show, handleUpdateTable } = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleSaveUser = async () => {
        let res = await postCreateUser(name, job);

        if (res && res.id) {
            // success
            handleClose();
            setName('');
            setJob('');
            handleUpdateTable({
                first_name: name,
                id: res.id,
            });
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">
                                <b>Name:</b>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">
                                <b>Job:</b>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={job}
                                onChange={(event) => setJob(event.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveUser()}>
                        Save User
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddNew;
