import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import rootReducer from './reducer/index'
import { createStore, Action } from "redux"
import { Provider } from "react-redux"




const store = createStore(rootReducer)

const theme = createMuiTheme({
    palette: {
        primary: {
            // main: '#fff',
            main: '#e2694a'
        },
        secondary: {
            // main: '##e2694a',
            main: '#0b0b0b',

        },
    },
})

ReactDOM.render(
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </ThemeProvider>
    </React.Fragment>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
