import React, { Component } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import login from '../views/login';
import home from '../views/home';
import lazyload from '../views/lazyload';
import echarts from '../views/echarts';
class RouterView extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={login} />
                    <Route path="/home" component={home} />
                    <Route path="/lazyload" component={lazyload} />
                    <Route path="/echarts" component={echarts} />
                    <Redirect from="/" to="login" exact />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default RouterView;
