import { IAction } from '../action/IAction'
import { TranslateHint, actionString } from '../action/translateStyle.action'


const initState: TranslateHint = {
  left: 0,
  top: 0,
  word: ''
}

const updateStyle = (state: TranslateHint, action: IAction<TranslateHint>) => {
  const newState = {...state}
  newState.left = action.payload.left
  newState.top = action.payload.top - 30
  newState.word = action.payload.word
  return newState
}

const translateStyleReducer = (state=initState, action: IAction<any>) => {
  console.log('acc', action)
  
  if(action.type === actionString.hintUpdate) {
    return updateStyle(state, action)
  }
  
  return state
}

export { translateStyleReducer }

