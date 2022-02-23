import React, { useState } from 'react'
import { Button, Container, Typography } from '@mui/material'
import { Formik, Field, Form } from "formik"
import * as yup from "yup"
import { useHistory } from 'react-router-dom'
import { login } from '../../../services/auth'
import InputField from '../../common/InputField'

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
        <div>
            <Container>
                <Typography variant='h2'>
                    Connexion
                </Typography>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    <Form>

                        <Field fullWidth variant="outlined" name='email' type='email' autoComplete='username' as={InputField} label='E-mail*' />
                        <Field fullWidth variant="outlined" name='password' type='password' autoComplete='new-password' as={InputField} label='Mot de passe*' />

                        <Button type='submit'>
                            Connexion
                        </Button>
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

        </div >
    )
}

export default Login
