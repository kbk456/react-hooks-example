import React from 'react';

function Example2(){

    const [count,setCount] = React.useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );

    function click(){
        setCount(count+1);
    }
}
export default Example2;