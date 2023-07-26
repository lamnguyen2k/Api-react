import './App.scss';

import Header from './components/Header';
import TableUses from './components/TableUses';
import Container from 'react-bootstrap/Container';

function App() {
    return (
        <div className="app-container">
            <Container>
                <Header />

                <TableUses />
            </Container>
        </div>
    );
}

export default App;
