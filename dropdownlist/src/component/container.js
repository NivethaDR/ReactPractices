import React, { Component } from 'react'

class Container extends Component {
    constructor(props){
        super(props)
    }
    render () {
        let listitems=[]
        switch(this.props.cpm){
            case "State":
            return (listitems=<ul className="well"><li>Tamil Nadu</li> <li>Kerala</li><li>Bihar</li></ul>);
             case "Capitals":
            return (listitems=<ul className="well"><li>Chennai</li> <li>Cochin</li><li>Patna</li></ul>);
             case "language":
            return (listitems=<ul className="well"><li>Tamil</li> <li>Malayalam</li><li>Hindi</li></ul>);
        }
        return (
            <div>
                {listitems}
            </div>
        )
    }
}

export default Container