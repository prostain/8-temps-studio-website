import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

function Register() {

    const apiURL = 'https://temps-studio-api.herokuapp.com/api/login'

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            }}
            onSubmit={handleSubmit}>
            <Typography variant='h1'>
                Connexion
            </Typography>

            <TextField variant='outlined' required name='email' label='Adresse email' id="email" />
            <TextField variant='outlined' required name='password' label='Mot de passe' id='password' type='password' />
            <TextField variant='outlined' required name='passwordConfirmation' label='Confirmez votre mot de passe' id='passwordConfirmation' type='password' />
            <TextField variant='outlined' required name='firstname' label='Prénom' id='firstname' type='text' />
            <TextField variant='outlined' required name='lastname' label='Nom' id='lastname' type='text' />
            <TextField variant='outlined' required name='address' label='Adresse' id='address' type='text' />
            <TextField variant='outlined' required name='postalCode' label='Code Postal' id='postalCode' type='text' />
            <TextField variant='outlined' required name='city' label='Ville' id='city' type='text' />
            <TextField variant='outlined' required name='country' label='Pays' id='country' type='text' />

            <Button type='submit'>
                Connexion
            </Button>
        </Box>
    )
}

export default Register
