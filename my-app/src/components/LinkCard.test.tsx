import React from 'react';
import LinkCard from './LinkCard';
import { render } from '@testing-library/react';
import { CardModel } from '../types/model';

it('shows the props correctly', () => {
    const cardData: CardModel = {
        createdDate: 1482363367071,
        contentType: 'text',
        href: 'https://sketchsoft3d.com/',
        content: 'hello',
    }
    const card = render(
        <LinkCard data={cardData} id={'123'} deleteCard={jest.fn()}></LinkCard>
    )
    
    expect(card.container).toMatchSnapshot()

    card.getByText('hello');
    expect(card.container.querySelector('a')?.href).toBe(cardData.href);
})