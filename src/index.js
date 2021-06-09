import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));