import { Card  } from 'react-bootstrap'
import React from 'react'

type TileProps = {
    children?: React.ReactNode
    height?: string
}
const Tile = ({ children, height }: TileProps) => {

    return (
        <Card className="rounded-4 border-0 h-100">
            <Card.Body className="text-center d-flex flex-column">
                {children}
            </Card.Body>
        </Card>
    )
}

export default Tile