import { Box } from '@mui/material'
import React from 'react'

type TileProps = {
 children? : React.ReactNode
 height?: string
}
const Tile = ({ children, height }: TileProps) => {
         
    return (
        <Box sx={{
            background: "#FFFFFF",
            boxShadow: "6px 6px 54px rgba(0, 0, 0, 0.25)",
            borderRadius: "16px",
            padding: "10px", 
           
        }}
        minHeight={height? height : '163px'}>
                {children}

        </Box>
    )
}

export default Tile