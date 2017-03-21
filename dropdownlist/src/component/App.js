import React, { Component } from 'react'

import Dropdownbtn from './dropdownbtn'

class App extends Component {
    render () {
            var buttonGroupInstance = <Dropdownbtn />;
        return (
            <div>
                {buttonGroupInstance}
            </div>
        )
    }
}

export default App