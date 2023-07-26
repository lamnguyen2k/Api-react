import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import { useEffect, useState } from 'react';
import { fetchAllUser } from '../service/UseService';
import ModalEdit from './ModalEdit';
import _ from 'lodash';

function TableUses({ props }) {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUser] = useState(0);
    const [totalPages, setTotaPages] = useState(0);

    const [showModalAddNew, setShowModalAddNew] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [dataUserEdit, setDataUserEdit] = useState({});

    const handleClose = () => {
        setShowModalAddNew(false);
        setShowModalEdit(false);
    };

    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers]);
    };

    const handleEditUser = (user) => {
        setDataUserEdit(user);
        setShowModalEdit(true);
    };

    const handleSaveEdit = (user) => {
        let cloneListUsers = _.cloneDeep(listUsers);
        let index = listUsers.findIndex((item) => item.id === user.id);
        cloneListUsers[index].first_name = user.first_name;
        setListUsers(cloneListUsers);
    };

    useEffect(() => {
        // call api
        getUsers(1);
    }, []);

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);

        if (res && res.data) {
            setTotalUser(res.total);
            setTotaPages(res.total_pages);
            setListUsers(res.data);
        }
    };

    const handlePageClick = (event) => {
        getUsers(+event.selected + 1);
    };

    return (
        <>
            <div className="my-3 add-new">
                <span>
                    <b>List User:</b>
                </span>
                <button
                    className="btn btn-success"
                    onClick={() => setShowModalAddNew(true)}
                >
                    New User
                </button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
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
                                <td>
                                    <button
                                        className="mx-2 btn btn-primary"
                                        onClick={() => handleEditUser(item)}
                                    >
                                        Edit
                                    </button>
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
            <ModalAddNew
                show={showModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />
            <ModalEdit
                show={showModalEdit}
                dataUserEdit={dataUserEdit}
                handleClose={handleClose}
                handleSaveEdit={handleSaveEdit}
            />
        </>
    );
}

export default TableUses;
