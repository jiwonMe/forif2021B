import type { User } from 'firebase/auth';
import React from 'react'
import { googleLogin } from '../utils/googleAuthentification'
import { Button } from 'react-bootstrap';

const LoginButton = ({ onLogin }: { onLogin: ({ token, user }: {token: string | null, user: User | null }) => void}) => {

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const result = await googleLogin();
        if (result === null) {
            console.error('login failed');
            return;
        }
        const { token, user } = result;
        onLogin({
            token: token ?? null,
            user: user ?? null,
        })
        console.log(token, user);
    }

    return (
        <Button onClick={handleClick}>sign in with google</Button>
    )
}

export default LoginButton
