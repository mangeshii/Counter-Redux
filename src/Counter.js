import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ONE, MINUS_ONE } from './action';

const containerStyle = {
    display: 'flex'
}

const buttonStyle = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px'
}

const Counter = () => {
    // const state = useSelector((state) => state);
    // console.log(state)
    const number = useSelector((state) => state.number);
    const dispatch = useDispatch();

    const subOneBtnClick = () => dispatch({ type: MINUS_ONE });
    const onAddOneBtnClick = () => dispatch({ type: ADD_ONE });

    return (
        <div className="App" >
            <header className="App-header">
                <h1>{number}</h1>
                <div style={containerStyle}>
                    <button type="button" style={buttonStyle} onClick={subOneBtnClick}>-</button>
                    <button type="button" style={buttonStyle} onClick={onAddOneBtnClick}>+</button>
                </div>
            </header>
        </div>
    );
}

export default Counter;
