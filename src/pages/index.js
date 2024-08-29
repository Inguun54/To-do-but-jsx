import React, { useState } from "react";

const Page = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const add = () => {
        setCount(count + 1);
    };

    const minus = () => {
        setCount(count - 1);
    };

    const handleInputValue = (value) => {
        setInputValue(value);
    };

    const addList = () => {
    };
    const setList = () =>{
      setList
    }

    return (
        <div>
            <h2>To do</h2>
            <h1>{count}</h1>
            <input value={inputValue} onChange={(e) => handleInputValue(e.target.value)}  />
            <button onClick={addList}>add</button>
            <button onClick={minus}>-</button>
            <button onClick={add}>+</button>
            <p>{inputValue}</p> 
        </div>
    );
};

export default Page;
