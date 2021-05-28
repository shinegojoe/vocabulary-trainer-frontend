import logo from './logo.svg'
// import './App.css'
import { Router } from './router/router'
import AppBar from './component/appBar'
import style from '../src/sass/app.module.sass'
import { useSelector } from 'react-redux'
import TranslateHintItem from './component/page/translateHintItem'
import { TranslateHint, TranslateStyle } from './action/translateStyle.action'


function App() {

  const translateHint = useSelector((state: any)=> {
    console.log('state', state)
    // setQq(state.translateStyle.style)
    return state.translateStyle as TranslateHint
  })

  const translateStyle: TranslateStyle = {
    top: translateHint.top,
    left: translateHint.left,
    word: translateHint.word
  }

  const isShow = translateHint.isShow


  return (
    <div className={style.app}>
      <AppBar></AppBar>
      <Router></Router>
      {isShow && <div className={style.hint} style={translateStyle}>
         <TranslateHintItem word={translateStyle.word}></TranslateHintItem>
      </div>}
      
    </div>
  );
}

export default App
