import React from 'react';
import { Provider } from 'react-redux';

import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import '../components/template/custom.css';

import store from '../store';
import Menu from '../components/template/Menu';
import Routes from './Routes';

export default props =>
    <Provider store={store}>
        <div className="container">
            <Menu />
            <Routes />
        </div>
    </Provider>