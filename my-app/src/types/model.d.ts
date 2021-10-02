export interface CardModel {
    id: string,
    createdDate: number,
    contentType: 'text' | 'link' | 'image',
    src?: string,
    href?: string,
    content: string,
}