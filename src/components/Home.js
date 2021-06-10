import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            linkName: props.initialLinkName
        }
    }

    componentWillMount(){
        console.log('Component will mount.');
    }

    componentDidMount(){
        console.log('Component did mount.');
    }

    componentWillReceiveProps(nextProps){
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Should Component update', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('Component will update', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component did update', prevProps, prevState);
    }

    componentWillUnmount(){
        console.log('Component will unmount');
    }

    onChangeLink(){
        this.props.changeLink(this.state.linkName);
    }

    onMakeOlder(){
        this.setState({age: this.state.age + 3});
    }

    onLinkInput(event){
        this.setState({linkName: event.target.value});
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
                <input type="text" value={this.state.linkName} onChange={(event) => this.onLinkInput(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link</button>
            </div>
        );
    }
}



export default Home;