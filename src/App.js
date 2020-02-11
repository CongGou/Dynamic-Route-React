import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom'
import Home from './component/Home'
import News from './component/News'
import User from './component/User'
import Not404 from './component/not404'
import './App.css';

import routes from './component/router/index'

export default class App extends Component{
    render() {
        console.log(this.props)
        return (
            <BrowserRouter>
                <div className="App">
                    <div className='Nav'>
                        <NavLink exact activeClassName='hover' to='/'>首页</NavLink>
                        <NavLink activeClassName='hover' to='/News'>新闻</NavLink>
                        <NavLink activeClassName='hover' to='/User'>用户</NavLink>
                    </div>

                    <Switch>
                        {
                            routes.map((item, index) => {
                                if (item.exact) {
                                    return (
                                        <Route exact={item.exact} path={item.path} component={item.component} key={index}></Route>
                                    )
                                } else {
                                    return (
                                        <Route path={item.path} component={item.component} key={index}></Route>
                                    )
                                }
                            })
                        }
                        {/*<Route exact path='/' component={Home}></Route>*/}
                        {/*<Route path='/News' component={News}></Route>*/}
                        {/*<Route path='/User' component={User}></Route>*/}
                        {/*<Route component={Not404}></Route>*/}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
