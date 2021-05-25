import { combineReducers } from 'redux'
import { translateStyleReducer } from '../reducer/translateStyle.reducer'


const rootReducer = combineReducers({
  translateStyle: translateStyleReducer
})

export default rootReducer
