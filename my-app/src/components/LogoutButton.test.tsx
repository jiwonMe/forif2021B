import React from 'react';
import { render } from '@testing-library/react';
import LogoutButton from './LogoutButton';

describe('Loggout Button display test', () => {
    const component = render(
        <LogoutButton onLogout={jest.fn()}></LogoutButton>
    )

    test('label display', () => {
        expect(component.container.querySelector('button')?.innerHTML).toEqual('logout');
    })
})