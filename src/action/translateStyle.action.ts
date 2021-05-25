import { IAction } from './IAction'

export type TranslateHint = {
  left: number
  top: number
  word: string
}


const baseString = 'translate'
export const actionString = {
  hintUpdate: `${baseString}/hintUpdate`
}


const translateHintUpdate = (x: number, y: number, word: string) => {
  const payload = {
    left: x,
    top: y,
    word
  }
  const action: IAction<TranslateHint> = {
    type: actionString.hintUpdate,
    payload
  }
  return action
}

export default { translateHintUpdate }