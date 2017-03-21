import React, { Component } from 'react'

import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'



import store from '../store'
import * as action from '../action/counter'

class App extends Component {
    render () {
        console.log(this.props)
        return (
            <div className="well">
                <span>Simple Calculator</span><br/>
                <input type='number' ref='number1'/><br/>
                <input type='number' ref='number2'/><br/>
                <button onClick={()=>this.props.actions.addition(parseInt(this.refs.number1.value),parseInt(this.refs.number2.value))}>add</button>
                <button onClick={()=>this.props.actions.subtraction(parseInt(this.refs.number1.value),parseInt(this.refs.number2.value))}>sub</button>
                <button onClick={()=>this.props.actions.multiply(parseInt(this.refs.number1.value),parseInt(this.refs.number2.value))}>mul</button>
                <button onClick={()=>this.props.actions.divide(parseInt(this.refs.number1.value),parseInt(this.refs.number2.value))}>div</button><br/>
                <span className="badge badge-info">{this.props.result}</span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {result:state.result};
}

function mapDispatchToProps(dispatch) {
    return {
        actions:bindActionCreators(action, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);