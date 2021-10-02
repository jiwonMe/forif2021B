import React, { useState } from 'react'
import { CardModel } from '../types/model'
import { nanoid } from 'nanoid'
import { parseContentType } from '../utils/parseContentType'

const CardFactory: React.FC<CardFactoryProps> = (props) => {
    const createCard: () => CardModel = () => ({
        id: nanoid(),
        createdDate: Date.now(),
        contentType: 'text',
        content: '',
    })

    const [state, setState] = useState<CardModel>(createCard())

    const { onCreate } = props

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const contentType = parseContentType(state.content)
        const href = contentType === 'link' ? state.content : undefined
        const src = contentType === 'image' ? state.content : undefined
        onCreate({
            ...state,
            contentType,
            href,
            src,
        })
        setState(createCard())

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="content" type="text" value={state.content} onChange={handleChange}></input>
            </form>
        </div>
    )
}

export default CardFactory

interface CardFactoryProps {
    onCreate: (card: CardModel) => void
}