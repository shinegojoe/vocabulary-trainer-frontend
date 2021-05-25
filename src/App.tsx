import logo from './logo.svg'
// import './App.css'
import { Router } from './router/router'
import AppBar from './component/appBar'
import style from '../src/sass/app.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import TranslateHintItem from './component/page/translateHintItem'


function App() {

  const xx = useSelector((state: any)=> {
    console.log('state', state)
    return state.translateStyle
  })


  return (
    <div className={style.app}>
      <AppBar></AppBar>
      <Router></Router>
      <div className={style.hint} style={xx}>
        <TranslateHintItem word={xx.word}></TranslateHintItem>
      </div>
    </div>
  );
}

export default App
