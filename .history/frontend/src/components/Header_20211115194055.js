import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function Header() {
    const [Usershow, setUserShow] = useState(false);

    const handleUserClose = () => setUserShow(false);
    const handleUserShow = () => setUserShow(true);
    return (

        <div>
            <nav class="navbar navbar-light navbarColor">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1 iconColor">EcommerceApp</span>
                    <form class="d-flex">
                        <input class="form-control searchInput" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success searchButton" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg></button>
                    </form>
                    <div class="headerRight">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart iconColor me-1" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <h5>()items</h5>
                        <Button onClick={handleUserShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle iconColor me-1" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <h5>Hello user, SignIn</h5>
                        </Button>

                        <Modal
                            show={Usershow}
                            onHide={handleUserClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Sign In</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            Col<Form>
                                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter First Name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Last Name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                    <Form.Text className="text-muted">
                                                        We'll never share your email with anyone else.
                                                    </Form.Text>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>
                                            </Form>umn
                                        </div>
                                        <div class="col">
                                            {/* <Form>
                                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter First Name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Last Name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                    <Form.Text className="text-muted">
                                                        We'll never share your email with anyone else.
                                                    </Form.Text>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>
                                            </Form> */}
                                        </div>

                                    </div>
                                </div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter First Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Last Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleUserClose}>
                                    Close
                                </Button>
                                <Button variant="primary">Understood</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header
