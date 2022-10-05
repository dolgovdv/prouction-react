import React, {useState} from 'react';
import './Counter.scss'

export const MyComponent = () => {
    const [state, setState] = useState(0);
    const increment = () => {
      setState((prevState) => prevState + 1)
    }
    return (
        <div>
            <h1 className="increment">{state}</h1>
            <button  onClick={increment}>increment {state}</button>
        </div>
    );
};

export default MyComponent;
