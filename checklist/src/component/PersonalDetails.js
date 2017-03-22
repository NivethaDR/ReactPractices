import React, { Component } from 'react'

class PersonalDetails extends Component {
    getData(e){
        this.props.getData(e.target.id,e.target.value);
    }
    render () {
        return (
            <div>
                <input type="number" id="phone" placeholder="phone" onChange={this.getData.bind(this)}/>
                <input type="text" id="degree" placeholder="degree" onChange={this.getData.bind(this)}/>
            </div>
        )
    }
}

export default PersonalDetails