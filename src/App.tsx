import logo from './logo.svg'
// import './App.css'
import { Router } from './router/router'
import AppBar from './component/appBar'
import { useState } from 'react'
import style from '../src/sass/app.module.sass'

function App() {

  const tt = {
    backgroundColor: 'red',
    width: '10px',
    height: '10px',
    top: 0,
    left: 100
  }

  const [ hintStyle, setHintStyle] = useState(tt)

  const test = (e: any) => {
    console.log(e)
    const x = {...hintStyle}
    x.left = (e.clientX)
    x.top = e.clientY
    console.log('x', x.left, 'y', x.top)
    
    setHintStyle(x)

  }
  
  return (
    <div onMouseDown={test} className={style.app}>
      <AppBar></AppBar>
      <Router></Router>
      <div className={style.hint} style={hintStyle}></div>
    </div>
  );
}

export default App
