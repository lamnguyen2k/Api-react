import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../service/UseService';

function TableUses({ props }) {
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        // call api
        getUsers();
    }, []);

    const getUsers = async () => {
        let res = await fetchAllUser();

        if (res && res.data) {
            setListUsers(res.data);
        }
    };

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => (
                            <tr key={`users-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default TableUses;
