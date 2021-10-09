import React from 'react'
import { CardModel } from '../types/model'
import { Card } from 'react-bootstrap'

interface CardProp {
    id: string,
    data: CardModel,
    deleteCard: (id: string) => void,
}

const TextCard: React.FC<CardProp> = ( props ) => {
    const date = new Date()
    date.setTime(props.data.createdDate)

    const { data: card } = props;

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {card.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted'>
                        created at {date.getTime()}
                    </Card.Footer>
            </Card>
        </div>
    )
}

export default TextCard