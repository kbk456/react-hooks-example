import React from 'react';

function Example5(){

    const [count,setCount] = React.useState(0);

    React.useEffect(()=>{
        console.log("componentDidMount");
        return () => {
            //cleanup
            //componentWillUnmount
        };
    },[]);

    //count가 변경될때 마다 작동
    React.useEffect(()=>{
        console.log('componentDidMount & componentDidUpdate by count',count);

        return () => {
            //cleanup
            console.log("cleanup by count",count);
            };
        },[count]);

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
export default Example5;