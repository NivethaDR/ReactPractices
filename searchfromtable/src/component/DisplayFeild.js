import React, { Component } from 'react'

class DisplayFeild extends Component {
    render () {
        let data=this.props.data;
        let tableToStore=[];
        for(let key in data){
          tableToStore.push(<tr key={key}><td>{key}</td><td>{data[key].email}</td><td>{data[key].phone}</td><td>{data[key].Degree}</td></tr>)
        }
        return (
            <div className="well">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Degree</th>
                        </tr>
                    </thead>
                    <tbody>   
                        {tableToStore}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayFeild