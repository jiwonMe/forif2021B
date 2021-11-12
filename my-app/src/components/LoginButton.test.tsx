import React from 'react';
import { render } from '@testing-library/react';
import LoginButton from './LoginButton';

describe('print', () => {
    const button = render(
        <LoginButton onLogin={jest.fn()}></LoginButton>
    )
    
    test('test', () => {
        expect(button.container.querySelector('button')?.innerHTML).toEqual('sign in with google');
    })
})