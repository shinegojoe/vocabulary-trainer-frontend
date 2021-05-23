import logo from './logo.svg'
import './App.css'
import { Router } from './router/router'
import AppBar from './component/appBar'

function App() {
  
  return (
    <div className="App">
      <AppBar></AppBar>
      <Router></Router>
    </div>
  );
}

export default App
