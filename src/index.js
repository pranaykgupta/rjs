import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component{
    constructor(){
        super();
        this.state = {
            homeLink: "Home"
        }
    }

    onChangeLinkName(newName){
        this.setState({homeLink: newName});
    }

    onGreet(){
        alert("Hello!");
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       <Home name={"Pranay"} initailAge={19} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));