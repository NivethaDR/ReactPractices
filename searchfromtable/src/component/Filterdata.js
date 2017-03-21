import React, { Component } from 'react'

class Filterdata extends Component {
    constructor(props){
        super(props);
        this.state={
            datatofilter:"",
            datafiltered:null
        }
    }
    updaing(e){
        this.setState({datatofilter:e.target.value});
        
    }
    searching(){
        for(let key in this.props.datagot){
                console.log(key)
                console.log(this.state.datatofilter)
            if(key==this.state.datatofilter){
               this.setState({datafiltered:<tr key={key}><td>{key}</td><td>{this.props.datagot[key].email}</td><td>{this.props.datagot[key].phone}</td><td>{this.props.datagot[key].Degree}</td></tr>});
               break;
            }
            else {
               this.setState({datafiltered:<tr><td>Sorry , No records found</td></tr>});
            }
        }
    }
    render () {
        return (
            <div>
                <input type="text" onChange={this.updaing.bind(this)} placeholder="search..."/>
                <button className="btn btn-primary" onClick={this.searching.bind(this)}>search</button>
                <div className="well">
                    <table className="table table-bordered">
                        <tbody>
                              {this.state.datafiltered}
                         </tbody>
                    </table>
                 </div>   
            </div>
        )
    }
}

export default Filterdata