import { DocumentReference } from "@firebase/firestore/dist/lite";
export interface CardModel {
    createdDate: number,
    contentType: 'text' | 'link' | 'image',
    src?: string,
    href?: string,
    content: string,
}