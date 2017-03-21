import React, { Component } from 'react'
import {Link} from 'react-router'


import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from '../action/actionupdate';

import FormFields from './FormFields'
 import StoreTable from './StoreTable'

class App extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div>
                <FormFields actions={this.props.actions}/>
                <Link to="/storetable">view table</Link>
                {this.props.children==null?null:React.cloneElement(this.props.children,this.props)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {count:state.updatereducer.store};
}

function mapDispatchToProps(dispatch) {
    return {
        actions:bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);