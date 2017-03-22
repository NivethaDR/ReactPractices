import React, { Component } from 'react'

class DisplayFeild extends Component {
    render () {
        for(let i=0;i<this.props.numberoffeilds;i+=2){
            var createdfeild=<tr key={i}><td>{this.props.newfeilds[i]}</td><td>{this.props.newfeilds[i+1]}</td></tr>
        }
        return (
            <div>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{this.props.details.name}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{this.props.details.age}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{this.props.details.phone}</td>
                        </tr>
                        <tr>
                            <td>Degree</td>
                            <td>{this.props.details.degree}</td>
                        </tr>
                            {createdfeild}
                    </tbody>
                </table>    
            </div>
        )
    }
}

export default DisplayFeild