import logo from './logo.svg'
import './App.css'
import Main from './component/main'
// import Home from './component/main/main'
import { Router } from './router/router'


function App() {
  
  return (
    <div className="App">
      {/* <Main></Main> */}
      {/* <Home></Home> */}
      <Router></Router>
    </div>
  );
}

export default App;
