

type TranslateHintStyle = {
  left: number
  top: number
}

const initState = {
  left: 0,
  top: 0,
  backgroundColor: 'red',
  // width: '10px',
  // height: '10px',
  word: ''
}

const updateStyle = (state: TranslateHintStyle) => {

}

const translateStyleReducer = (state=initState, action: any) => {
  console.log('acc', action)
  const newState = {...state}
  newState.left = action.x
  newState.top = action.y
  newState.word = action.word

  return newState
}

export { translateStyleReducer }

