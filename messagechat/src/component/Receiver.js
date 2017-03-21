import React, { Component } from 'react'

class Receiver extends Component {
    messageReceived(){
        let data=this.refs.data.value;
        if(data!=" "){
        this.props.messageReceiveData(data);
        this.refs.data.value=" ";
         }
    }
    render () {
         var receivedmessages=this.props.data.map(function(data,index){
                              return <div key={index}>{data}</div>
                              })
        return (
            <div className="jumbotron">
                 <div className="card-block">Receiver</div>
                 <div>
                    {receivedmessages}
                </div>
                <input type="text" className="form-control" placeholder="type message" ref="data"/>
                <span className="input-group-btn">
                <button className="btn btn-success" type="button"  onClick={this.messageReceived.bind(this)}>send</button>
                </span>
            </div>
        )
    }
}

export default Receiver