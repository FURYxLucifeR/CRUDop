import { Modal, Button, Alert } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import Employee from './Employee';
import AddForm from './AddForm';

const EmployeeList = () => {

    const { employees } = useContext(EmployeeContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(2)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 1000)
    }

    useEffect(() => {
        handleClose();
    }, [employees])

    // const indexOfLastEmployee = currentPage * employeesPerPage;
    // const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    // const currentemployees = sortedemployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    // const totalPagesNum = Math.ceil(sortedemployees.length / employeesPerPage);


    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success">
                Employee List Updated Succefully!
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        employees.map(employee => (
                            <tr key={employee.id}>
                                <Employee Employee={employee} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Button
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EmployeeList;