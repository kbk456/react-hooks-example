import React from 'react';

class Example extends React.Component{
    state = {
        count : 0
    };
    render() {
        const {count} = this.state;
        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={this.click}>Click me</button>
            </div>
        );
    }
    click = () => {
        this.setState({
            count : this.state.count + 1
            }
        )
    }
}
export default Example;