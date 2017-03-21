import React, { Component } from 'react'

class Leftsidecontainer extends Component {
    render () {
        var leftdata
        if(this.props.movedleft.length!=0){
           leftdata=this.props.movedleft.map(function(key,index){
            return <li key={index}>{key}</li>
        })
    }
    else{
        leftdata=this.props.savingleft.map(function(key,index){
            return <li key={index}>{key}</li>
        })
    }
        return (
            <div className='card well'>
                <h4 className="card-title">Leftsidecontainer</h4>
                <ul>
                    {leftdata}
                </ul>   
            </div>
        )
    }
}

export default Leftsidecontainer