import React from 'react';
import CustomHook from './CustomHook';

function App() {
    const data = CustomHook();

    return (
        <React.Fragment>
            <h1>{data.count}</h1>
            <button onClick={data.handleCount}>Inc</button>
        </React.Fragment>
        )
}

export default App;