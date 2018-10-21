import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router'


class App extends Component {

    componentWillMount() {

        //console.log(Config.FIREBASE_API_KEY)
        const config = {
            apiKey: 'AIzaSyA8ICX2BDVo98brQBkoUGHlSaIM9iBRCO8',
            authDomain: 'manager-cd4cc.firebaseapp.com',
            databaseURL: 'https://manager-cd4cc.firebaseio.com',
            projectId: 'manager-cd4cc',
            storageBucket: '',
            messagingSenderId: '808740692794'
          };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;
