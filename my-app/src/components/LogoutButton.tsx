import React from 'react'
import { Button } from 'react-bootstrap'
import { googleLogout } from '../utils/googleAuthentification'

const LogoutButton = ({ onLogout }: { onLogout: () => void}) => {

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        googleLogout();
        onLogout();
    }

    return (
        <Button onClick={handleClick}>logout</Button>
    )
}

export default LogoutButton
