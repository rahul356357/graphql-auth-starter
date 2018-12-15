import React from 'react'
import Header from './Header';

const App = ({ children }) => {
    return (
        <div className="container">
            <Header></Header>
            <div>{children}</div>
        </div>
    )
}

export default App;