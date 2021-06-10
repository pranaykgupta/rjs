import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component{
    constructor(){
        console.log('constructor');
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        }
    }

    onChangeLinkName(newName){
        this.setState({homeLink: newName});
    }

    onGreet(){
        alert("Hello!");
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render(){
        let homeCmp="";
        if(this.state.homeMounted){
            homeCmp = <Home name={"Pranay"} initialAge={19} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)} initialLinkName={this.state.homeLink} />;
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                       <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));