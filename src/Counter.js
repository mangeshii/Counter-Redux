import React from 'react';
import { useState } from 'react';

const containerStyle = {
    display: 'flex'
}

const buttonStyle = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px'
}

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleAddOne = () => {
        return (
            setCount(count + 1)
        )
    }

    const handleSubOne = () => {
        return (
            setCount(count - 1)
        )
    }
    
    return (
        <div className="App" >
            <header className="App-header">
                <h1>{count}</h1>
                <div style={containerStyle}>
                    <button type="button" style={buttonStyle} onClick={handleSubOne}>-</button>
                    <button type="button" style={buttonStyle} onClick={handleAddOne}>+</button>
                </div>
            </header>
        </div>
    );
}

export default Counter;
