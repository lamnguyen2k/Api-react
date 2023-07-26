import './App.scss';

import Header from './components/Header';
import TableUses from './components/TableUses';
import Container from 'react-bootstrap/Container';
import ModalAddNew from './components/modalAddNew';
import { useState } from 'react';

function App() {
    const [showModalAddNew, setShowModalAddNew] = useState(false);

    const handleClose = () => {
        setShowModalAddNew(false);
    };

    return (
        <div className="app-container">
            <Container>
                <Header />
                <div className="my-3 add-new">
                    <span>
                        <b>List User:</b>
                    </span>
                    <button
                        className="btn-success"
                        onClick={() => setShowModalAddNew(true)}
                    >
                        New User
                    </button>
                </div>

                <TableUses />
                <ModalAddNew show={showModalAddNew} handleClose={handleClose} />
            </Container>
        </div>
    );
}

export default App;
