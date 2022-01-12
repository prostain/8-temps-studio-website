import React, { useState } from 'react'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'

type Credentials = {
    login: string,
    password: string,
}
function Login() {

    const apiURL = 'https://temps-studio-api.herokuapp.com/api/login'
    let history = useHistory()

    async function loginUser(credentials: Credentials) {

    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        const credentials = { email, password }

        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)

        })
            .then(data => data.json())
            .then(data => {
                if (data['accessToken']){
                    localStorage.setItem('accessToken', data['accessToken'])
                    localStorage.setItem('refreshToken', data['refreshToken'])
                    localStorage.setItem('email',email)
                    history.push("/profile")
                }        
            })




    }
    return (
        <div>
            <Container>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                    onSubmit={handleSubmit}
                >

                    <Typography variant='h1'>
                        Connexion
                    </Typography>
                    <TextField variant='outlined' required name='email' label='Adresse email' id="email" />
                    <TextField variant='outlined' required name='password' label='Mot de passe' id='password' type='password' />
                    <Button type='submit'>
                        Connexion
                    </Button>
                </Box>
            </Container>

        </div >
    )
}

export default Login
