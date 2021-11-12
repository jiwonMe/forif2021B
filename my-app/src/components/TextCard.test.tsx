import React from 'react';
import TextCard from './TextCard';
import { render } from '@testing-library/react';
import { CardModel } from '../types/model';

// it('snapshot', () => {
//     const cardData: CardModel = {
//         createdDate: Date.now(),
//         contentType: 'text',
//         content: 'hello',
//     }
//     const card = render(
//         <TextCard data={cardData} id={'123'} deleteCard={() => {}}></TextCard>
//     )
//     expect(card.container).toMatchSnapshot()
// })

it('shows the props correctly', () => {
    const cardData: CardModel = {
        createdDate: Date.now(),
        contentType: 'text',
        content: 'hello',
    }
    const card = render(
        <TextCard data={cardData} id={'123'} deleteCard={jest.fn()}></TextCard>
    )
    card.getByText('hello');
    expect(card.getAllByText(/\d{13}/g)).toBeDefined();
})