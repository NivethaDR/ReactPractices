import React, { Component } from 'react'
import Sender from './Sender'
import Receiver from './Receiver'

class App extends Component {
    constructor(){
        super();
        this.state={
            messagesent:[],
            messageReceive:[]
        }
    }
    updatingSentMessage(e){
        var sentmessage=[...this.state.messagesent,e]
        this.setState({messagesent:sentmessage})
    }
    updatingReceivedMessage(e){
        var receivedmessage=[...this.state.messageReceive,e]
        this.setState({messageReceive:receivedmessage})
    }
    render () {
        return (
            <div>
               <div> <Sender messageSentData={this.updatingSentMessage.bind(this)}  data={this.state.messageReceive}/> </div>
               <div> <Receiver data={this.state.messagesent} messageReceiveData={this.updatingReceivedMessage.bind(this)}/> </div>
            </div>
        )
    }
}

export default App