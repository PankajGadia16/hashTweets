import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Router } from 'react-router'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker'
import { store, history } from './redux/store'

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider>
), document.getElementById('root'))

registerServiceWorker()