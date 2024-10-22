import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as yup from "yup"
import { useHistory } from 'react-router-dom'
import { login } from '../../../services/auth'

import '../../../../styles/loginRegister.css';
import { Container, Button, Row } from 'react-bootstrap'


const Login: React.FC = () => {

    const initialValues: {
        email: string;
        password: string;
    } = {
        email: "",
        password: "",
    };

    const [message, setMessage] = useState("")
    let history = useHistory()


    const validationSchema = yup.object().shape({
        email: yup.string().required("Requis"),
        password: yup.string().required("Requis"),
    });

    const handleLogin = (formValue: { email: string, password: string }) => {
        const { email, password } = formValue;


        setMessage('')

        login(email, password).then(
            () => {
                history.push("/profile")
                history.go(0)
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage('Connexion échouée');
            }
        )
    }

    return (
        <Container fluid className='loginRegister '>

            <Row className='pt-5'>
                <h1 className='text-center text-uppercase lrTitle mx-auto'> Connectez vous à votre compte </h1>
            </Row>
            <Row>


                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    <Form>
                        <Container>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <Field name="email" type="text" className="form-control" />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Mot de passe *</label>
                                <Field name="password" type="password" autoComplete='current-password' className="form-control" />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div>

                            <div className=' col-xs-12 col-md-4 offset-md-4 d-grid pt-5'>
                                <Button variant='light' type='submit'>
                                    Connexion
                                </Button>
                            </div>
                        </Container>

                    </Form>

                </Formik>
            </Row>



            {message && (
                <div className='d-grid pt-5' >
                    <div className='text-center'>
                        {message}
                    </div>
                </div>
            )}
        </Container>

    )
}

export default Login
