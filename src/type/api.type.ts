
export interface IResp<T> {
    data: T
    status: string
}

export  type Page = {
    id?: number
    name: string
}

 export type Script = {
    id?: number
    name: string
    text: string
}

export type  Text = {
    id?: number
    vId: number
    text: string
}

export type Vocabulary = {
    id?: number
    vocabulary: string
    checked: boolean
    pageId: number
}

export type Translate = {
    text: string
}