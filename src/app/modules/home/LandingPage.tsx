import { Box } from '@mui/system'
import React, { Component } from 'react'

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns:'repeat(12,1fr)',
                    gridTemplateRows:'1fr',
                    gridColumnGap:'5px',
                    gridRowGap:'5px',

                }}>

                    <Box>
                        8 Temps Studio
                    </Box>

                    <Box>
                        Concept
                    </Box>

                    
                    <Box>
                        Catégories
                    </Box>
                    <Box>
                        Professeurs
                    </Box>
                    
                    <Box>
                        Contact
                    </Box>

                    <Box>
                        Abonnements
                    </Box>

                    <Box>
                        Blog
                    </Box>

                    <Box>
                        Contacts
                    </Box>

                    <Box>
                        Connexion + Recherche
                    </Box>
                </Box>
            </>
        )
    }
}
