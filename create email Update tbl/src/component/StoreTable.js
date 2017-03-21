import React, { Component } from 'react';
import {Link} from 'react-router'

class StoreTable extends Component {
    render () {
        var datareceived=this.props.count.map(function(key,index){
            return<tr className="row" key={index}><td>{key.email}</td><td >{key.pass}</td></tr>
        })
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr className="row">
                        <td>Email</td>
                        <td>password</td>
                    </tr>
                    </thead>
                    
                    <tbody>
                      {datareceived}
                    </tbody>
                </table>
                <Link to="/">back</Link>
            </div>
        )
    }
}

export default StoreTable