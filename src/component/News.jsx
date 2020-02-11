import React, {Component} from 'react';
import {
    Switch,
    NavLink,
    Route
} from 'react-router-dom'
import Newslist from "./newslist/newslist";
import Index from "./newslist/index";
import Not404 from "./not404";

class News extends Component {
    render() {
        return (
            <div>
                <div className={'newslist'}>
                    <div className={'title'}>
                        <NavLink to='/News/newslist/111'>新闻1</NavLink><br/>
                        <NavLink to='/News/newslist/222'>新闻2</NavLink><br/>
                        <NavLink to='/News/newslist/333'>新闻3</NavLink><br/>
                        <NavLink to='/News/newslist/444'>新闻4</NavLink><br/>
                    </div>
                    <div className={'con'}>
                        <Switch>
                            <Route exact path='/News/' component={Index}></Route>
                            <Route  path='/News/newslist/:id' component={Newslist}></Route>
                            <Route path='/News/' component={Not404}></Route>
                        </Switch>
                    </div>
                </div>
            </div>

        );
    }
}

export default News;