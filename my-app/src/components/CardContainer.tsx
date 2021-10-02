import React, { useEffect, useState } from 'react'
import { CardModel } from '../types/model'
import Card from './Card'
import CardFactory from './CardFactory'
import firebase from '../firebase'
import { Firestore } from 'firebase/firestore/lite'

const CardContainer: React.FC = () => {
    const [state, setState] = useState<{ data: CardModel, id: string }[]>([])

    // firestore에서 받아온 데이터로 초기 state 설정
    const loadData = async (db: Firestore) => {
        const collection = firebase.collection(db, 'card_collection')
        const snapshot = await firebase.getDocs(collection)
        const docs = snapshot.docs.map(
            doc => ({
                data: doc.data() as CardModel,
                id: doc.id,
            })
        )
        setState(docs)
        console.log(docs);
    }

    useEffect(() => {
        loadData(firebase.db)
    }, [])

    const createCard = async (card: CardModel) => {
        const { createdDate, contentType, src, href, content } = card
        const newCard = {
            createdDate,
            contentType,
            src : src !== undefined ? src : '',
            href : href !== undefined ? href : '',
            content,
        }

        // firestore에 카드 데이터 추가
        const collection = firebase.collection(firebase.db, 'card_collection')
        const ref = await firebase.addDoc(collection, newCard)
        setState([
            ...state,
            {
                data: newCard,
                id: ref.id,
            }
        ])

    }
    
    const deleteCard = async (id: string) => {
        setState(state.filter( card => card.id !== id ))

        // firestore에서 삭제
        const collection = firebase.collection(firebase.db, 'card_collection')
        await firebase.deleteDoc(firebase.doc(collection, id))
    }

    return (
        <div>
            {
                state.map(doc => {
                    return (
                        <Card
                            id = {doc.id}
                            data = {doc.data}
                            deleteCard = {deleteCard}
                        />
                    )
                })
            }
            <CardFactory onCreate={createCard}></CardFactory>
        </div>
    )
}

export default CardContainer
