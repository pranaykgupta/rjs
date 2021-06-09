import React, {Component} from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <p>In a new Component!</p>
                <p>I am {this.props.name} and my age is {this.props.age} years old.</p>
                <p>User Object: Name = {this.props.user.name}</p>
                <h3>Hobbies</h3>
                <ul>
                    {this.props.user.hobbies.map( (hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
                <hr />
                {this.props.children}
            </div>
        );
    }
}



export default Home;