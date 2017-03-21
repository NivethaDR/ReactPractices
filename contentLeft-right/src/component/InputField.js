import React, { Component } from 'react'

class InputField extends Component {
    saveLeft(){
        let inputdata=this.refs.data.value;
        this.props.leftcontent(inputdata);
        this.refs.data.value=""
    }
    saveRight(){
        let inputdata=this.refs.data.value;
        this.props.rightcontent(inputdata);
        this.refs.data.value=""
    }
    render () {
        return (
            <div>
                <input type="text" ref="data"/>
                <button type="button" className="btn btn-primary" onClick={this.saveLeft.bind(this)}>insert-Left</button>
                <button type="button" className="btn btn-success" onClick={this.saveRight.bind(this)}>insert-Right</button>
            </div>
        )
    }
}

export default InputField