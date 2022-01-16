import React from 'react';

//useState => count
//useState => {count:0}; 객체처럼
function Example3(){

    const [state,setState] = React.useState({count:0});

    return (
        <div>
            <p>You clicked {state.count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );

    function click(){
        // setState({
        //     count :state.count+1
        // });
        // setState((state) => {
        //     return {
        //         count : state.count + 1,
        //     };
        // });
        setState((state) => ({
                count : state.count + 1,
        }));
    }
}
export default Example3;