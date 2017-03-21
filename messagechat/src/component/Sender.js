import React, { Component } from 'react'

class Sender extends Component {
    messageSent(){
        let data=this.refs.data.value;
        if(data!=" "){
        console.log(data)
        this.props.messageSentData(data);
        this.refs.data.value=" "}
    }
    render () {
        var receivedmessages=this.props.data.map(function(datas,index){
            return <div key={index}>{datas}</div>
        })
        return (
            <div className="jumbotron">
                <div className="card-block">Sender</div>
                {receivedmessages}
                <input type="text" className="form-control" placeholder="type message" ref="data"/>
                <span className="input-group-btn">
                    <button className="btn btn-success" type="button"  onClick={this.messageSent.bind(this)}>send</button>
                </span>
            </div>
        )
    }
}

export default Sender