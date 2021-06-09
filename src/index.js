import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       <Header homeLink={"Home"}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       <Home name={"Pranay"} initailAge={19} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));