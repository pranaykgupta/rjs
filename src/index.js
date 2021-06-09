import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component{
    render(){
        const user = {
            name: "Gupta ji",
            hobbies: ["Badminton", "Reading"]
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       <Home name={"Pranay"} age={19} user={user} >
                           <p>This is inside home.</p>
                       </Home>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));