import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import Tile from '../common/Tile'
import SettingsIcon from '@mui/icons-material/Settings';

function Profile() {
    return (
        <>
            <Tile>

                <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gridTemplateRows: '1fr' }}>
                    <Box sx={{ gridArea: '1 / 1 / 5 / 2' }}>
                        <img src="https://via.placeholder.com/150" alt="" />
                    </Box>

                    <Box >
                        <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems: 'baseline' }}>
                            <Typography>
                                Profil
                            </Typography>
                            <IconButton aria-label="settings" href='#' color="primary">
                                <SettingsIcon />
                            </IconButton>
                        </Box>
                        <Typography>
                            Prénom Nom
                        </Typography>
                        <Typography>
                            Abonnement
                        </Typography>
                        <Typography>
                            Téléphone
                        </Typography>
                        <Typography>
                            Message
                        </Typography>
                    </Box>
                </Box>

            </Tile>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', margin:'2em' }}>
                <Button variant="contained" href="#">Mon abonnement</Button>

                <Button variant="contained" href="#">Paiments</Button>

                <Button variant="contained" href="#">Mes données</Button>

                <Button variant="contained" href="#">{'Chat & Services'}</Button>

            </Box>


            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h1" component="div" gutterBottom>
                    h1. Heading
                </Typography>
                <Typography variant="h2" gutterBottom component="div">
                    h2. Heading
                </Typography>
                <Typography variant="h3" gutterBottom component="div">
                    h3. Heading
                </Typography>
                <Typography variant="h4" gutterBottom component="div">
                    h4. Heading
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    h5. Heading
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    h6. Heading
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div">
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>

            <Box>
                {"fOOTER"}
            </Box>
        </>
    )
}

export default Profile
