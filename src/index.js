import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import store from "./reducers/store";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from 'react-router-dom'
import {guid8} from "./utils/guid";

const CreateNew = () => {
    return  <Redirect to={`/${guid8()}/`}/>
}

const ToCanvas = (props) => {
    const {match} = props,

        {params} = match || {},
        {bucketId} = params;

    // console.log('toCanvas', true);

    return  <Redirect to={`/${bucketId}/_/1`}/>
}

ReactDOM.render(<Provider store={store}>
    <Router>
        <div id="router">
        <Route exact path="/" component={CreateNew}/>
        <Route exact path="/:bucketId/" component={ToCanvas}/>
        <Route exact path="/:bucketId/:componentId/:resolutionId" component={App}/>
        </div>
    </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
