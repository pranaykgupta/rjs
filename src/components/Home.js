import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super();
        this.state = {
            age: props.initailAge,
            status: 0,
            linkName: "Changed Link"
        }
    }

    onChangeLink(){
        this.props.changeLink(this.state.linkName);
    }

    onMakeOlder(){
        this.setState({age: this.state.age + 3});
    }

    render(){
        return(
            <div>
                <p>In a new Component!</p>
                <p>I am {this.props.name} and my age is {this.state.age} years old.</p>
                <hr />
                <button onClick={ () => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr />
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr />
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link</button>
            </div>
        );
    }
}



export default Home;