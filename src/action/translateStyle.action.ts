import { IAction } from './IAction'


export type TranslateStyle = {
  left: number
  top: number
  word: string
}

export type TranslateHint = {
  left: number
  top: number
  word: string
  isShow: boolean
}


const baseString = 'translate'
export const actionString = {
  hintUpdate: `${baseString}/hintUpdate`,
  isShow: `${baseString}/isShow`
}


const translateHintUpdate = (x: number, y: number, word: string) => {

  const payload: TranslateStyle = {
    left: x,
    top: y,
    word
  }
  
  const action: IAction<TranslateStyle> = {
    type: actionString.hintUpdate,
    payload
  }
  return action
}

const isShow = (isShow: boolean) => {
  const payload: boolean = isShow
  const action: IAction<boolean> = {
    type: actionString.isShow,
    payload
  }

  return action
}

export default { translateHintUpdate, isShow }