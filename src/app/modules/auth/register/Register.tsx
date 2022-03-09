import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as yup from "yup"
import { useHistory } from 'react-router-dom'
import { register } from '../../../services/auth'
import InputField from '../../common/InputField'
import { registerData } from '../../../services/auth'
import { Button, Col, Container, Row } from 'react-bootstrap'

import '../../../../styles/loginRegister.css'
function Register() {

    const [message, setMessage] = useState("")
    let history = useHistory();

    const initialValues: registerData = {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        address: '',
        postalCode: '',
        city: '',
        country: '',
    }

    const validationSchema = yup.object().shape({
        email: yup.string().required('Requis'),
        password: yup.string().required('requis'),
        passwordConfirmation: yup.string().required('requis'),
        firstname: yup.string().required('requis'),
        lastname: yup.string().required('requis'),
        address: yup.string().required('requis'),
        postalCode: yup.string().required('requis'),
        city: yup.string().required('requis'),
        country: yup.string().required('requis'),
    })

    const handleRegistration = (formValue: registerData) => {
        setMessage('')

        register(formValue).then(
            () => history.push('/profile'),
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage('Inscription échouée');
            }
        )
    }

    return (
        <Container fluid className='loginRegister'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegistration}
            >
                <Form>

                    <Container>
                        <Row>
                            <i className="bi bi-arrow-left"></i>
                        </Row>
                        <Row>
                            <h1 className='text-center text-uppercase lrTitle'> Inscrivez vous </h1>
                        </Row>
                        <Row>

                            <div className='form-group col-lg-6'>
                                <label htmlFor='lastname'> Nom </label>
                                <Field
                                    name='lastname'
                                    id='lastname'
                                    type='text'
                                    className='form-control' />
                                <ErrorMessage
                                    name="lastname"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div>
                            <div className="form-group col-lg-6">
                                <label htmlFor='firstname'> Prénom </label>
                                <Field
                                    name='firstname'
                                    id='firstname'
                                    type='text'
                                    className='form-control' />
                                <ErrorMessage
                                    name="firstname"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div >
                        </Row>
                        <Row>
                            <div className="form-group">
                                <label htmlFor='email'> Email </label>
                                <Field
                                    name='email'
                                    id='email'
                                    type='email'
                                    className='form-control' />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div >
                        </Row>
                        <Row>
                            <div className="form-group">
                                <label htmlFor='address'> Adresse </label>
                                <Field
                                    name='address'
                                    id='address'
                                    type='text'
                                    className='form-control' />
                                <ErrorMessage
                                    name="address"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div >

                        </Row>
                        <Row>
                            <Col className="form-group col-lg-6">
                                <label htmlFor='postalCode'> Code Postal </label>
                                <Field
                                    name='postalCode'
                                    id='postalCode'
                                    type='text'
                                    className='form-control' />
                                <ErrorMessage
                                    name="postalCode"
                                    component="div"
                                    className="alert alert-danger"
                                />

                            </Col>
                            <Col className="form-group col-lg-6">
                                <label htmlFor='city'> Ville </label>
                                <Field
                                    name='city'
                                    id='city'
                                    type='text'
                                    className='form-control' />
                                <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="alert alert-danger"
                                />

                            </Col>

                            <Col xs={12}>
                                <label htmlFor='country'> Pays </label>
                                <Field
                                    name='country'
                                    id='country'
                                    type='text'
                                    className='form-control' />
                                <ErrorMessage
                                    name="country"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <label htmlFor='password'> Mot de passe </label>
                                <Field
                                    name='password'
                                    id='password'
                                    type='password'
                                    className='form-control' />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </Col>
                            <Col>
                                <label htmlFor='passwordConfirmation'> Mot de passe </label>
                                <Field
                                    name='passwordConfirmation'
                                    id='passwordConfirmation'
                                    type='password'
                                    className='form-control' />
                                <ErrorMessage
                                    name="passwordConfirmation"
                                    component="div"
                                    className="alert alert-danger"
                                />

                            </Col>

                        </Row>

                        <Row>
                            <a href="#"> Mot de passe oublié ?</a>
                        </Row>

                        <Row>
                            Deja un compte ? <a href="/register"> se connecter</a>
                            <Button variant='light' type='submit'>
                                Connexion
                            </Button>
                        </Row>

                    </Container>




                </Form>

            </Formik>

            {message && (
                <div >
                    <div >
                        {message}
                    </div>
                </div>
            )}
        </Container>
    )
}

export default Register
