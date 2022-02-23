import { Box, Button, Container, Link, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'
import { Formik, Field, Form } from "formik"
import * as yup from "yup"
import { useHistory } from 'react-router-dom'
import { register } from '../../../services/auth'
import InputField from '../../common/InputField'

type registerValues = {
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    address: string,
    postalCode: string,
    city: string,
    country: string,
}

function Register() {

    const [message, setMessage] = useState("")

    const initialValues: registerValues = {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        address: '',
        postalCode: '',
        city: '',
        country: '',
    }

    const validationSchema = yup.object().shape( {
        email: yup.string().required('requis'),
        password: yup.string().required('requis').min(6, 'Votre mot de passe doit faire 6 caractères minimum'),
        passwordConfirmation: yup.string().required().min(6, 'Votre mot de passe doit faire 6 caractères minimum'),
        firstname: yup.string().required('requis'),
        lastname: yup.string().required('requis'),
        address: yup.string().required('requis'),
        postalCode: yup.string().required('requis'),
        city: yup.string().required('requis'),
        country: yup.string().required('requis'),
    })

    const apiURL = 'https://temps-studio-api.herokuapp.com/api/login'

    const handleLogin = (formValue: registerValues) => {
        setMessage('')

    }

    return (
        <Container>
            <Typography variant='h1'> Inscription </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                <Form>

                    <Field variant='outlined' required name='email' label='Adresse email' id="email" as={InputField} />
                    <Field variant='outlined' required name='password' autoComplete='new-password' label='Mot de passe' id='password' type='password' as={InputField} />
                    <Field variant='outlined' required name='passwordConfirmation'autoComplete='new-password'  label='Confirmez votre mot de passe' id='passwordConfirmation' type='password' as={InputField} />
                    <Field variant='outlined' required name='firstname' label='Prénom' id='firstname' type='text' as={InputField} />
                    <Field variant='outlined' required name='lastname' label='Nom' id='lastname' type='text' as={InputField} />
                    <Field variant='outlined' required name='address' label='Adresse' id='address' type='text' as={InputField} />
                    <Field variant='outlined' required name='postalCode' label='Code Postal' id='postalCode' type='text' as={InputField} />
                    <Field variant='outlined' required name='city' label='Ville' id='city' type='text' as={InputField} />
                    <Field variant='outlined' required name='country' label='Pays' id='country' type='text' as={InputField} />

                    <Button type='submit'>
                        Connexion
                    </Button>
                </Form>

            </Formik>
        </Container>
    )
}

export default Register
