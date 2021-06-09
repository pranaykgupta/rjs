import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super();
        this.state = {
            age: props.initailAge,
            status: 0
        }
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
            </div>
        );
    }
}



export default Home;