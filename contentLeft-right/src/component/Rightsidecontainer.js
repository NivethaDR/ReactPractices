import React, { Component } from 'react'

class Rightsidecontainer extends Component {
    render () {
        if(this.props.movedright.length!=0){
         var rightdata=this.props.movedright.map(function(key,index){
            return <li key={index}>{key}</li>
        })
    }
    else{
         var rightdata=this.props.savingright.map(function(key,index){
            return <li key={index}>{key}</li>
        })
    }
        return (
             <div className='card well'>
                <h4 className="card-title">Rightsidecontainer</h4>
                <ul>
                    {rightdata}
                </ul>   
            </div>
        )
    }
}

export default Rightsidecontainer