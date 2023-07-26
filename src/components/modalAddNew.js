import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalAddNew(props) {
    const { handleClose, show } = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleSaveUser = () => {
        console.log('check state', 'name = ', name, 'job = ', job);
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
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddNew;