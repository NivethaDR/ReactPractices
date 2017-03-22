import React, { Component } from 'react'

class Basicinfo extends Component {
    getData(e){
        this.props.getData(e.target.id,e.target.value);
    }
    render () {
        return (
            <div>
                <div>
                    <input type='text' placeholder='Name' id="name" onChange={this.getData.bind(this)}/>
                    <input type='text' placeholder='Age' id="age" onChange={this.getData.bind(this)}/>
                 </div>
            </div>
        )
    }
}

export default Basicinfo