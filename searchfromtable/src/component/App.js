import React, { Component } from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../actions/indoxaction'

import DisplayFeild from './DisplayFeild'
import Filterdata from './Filterdata'

class App extends Component {
    componentDidMount () {
        this.props.actions.loadjson();
    }
    
    render () {
        return (
            <div>
                <DisplayFeild data={this.props.data}/>
                <Filterdata actions={this.props.actions} datagot={this.props.data}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data:state.indoxreducer.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App)