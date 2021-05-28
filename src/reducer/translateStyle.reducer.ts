import { IAction } from '../action/IAction'
import { TranslateHint, actionString, TranslateStyle } from '../action/translateStyle.action'



let initState: TranslateHint = {
  left: 0,
  top: 0,
  word: '',
  isShow: false
}

const updateStyle = (state: TranslateHint, action: IAction<TranslateStyle>) => {
  let newState = {...state}
  newState.left = action.payload.left
  newState.top = action.payload.top - 30
  newState.word = action.payload.word
  newState.isShow = true
  return newState
}

const isShow = (state: TranslateHint, action: IAction<boolean>) => {
  let newState = {...state}
  newState.isShow = action.payload
  return newState
}

const translateStyleReducer = (state=initState, action: IAction<any>) => {
  console.log('acc', action)
  
  if(action.type === actionString.hintUpdate) {
    return updateStyle(state, action)
  }
  if(action.type === actionString.isShow) {
    return isShow(state, action)
  }
  
  return state
}

export { translateStyleReducer }

