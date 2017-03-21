import React, { Component } from 'react'
import {ButtonGroup,DropdownButton,MenuItem,Button} from 'react-bootstrap'

import Container from './container'

class Dropdownbtn extends Component {
    constructor (props) {
        super(props)
        this.state={
            cmp:""
        }
    }
    
    changeCmp(e){
        console.log(e);    
        this.setState({cmp:e});    
    }
    render () {
        return (
            <div>
                {/*<ButtonGroup>*/}
                    <DropdownButton id="dropdown-btn-menu" bsStyle="success" title="Categories" onSelect={(eve)=>{this.changeCmp(eve)}}>
                        <MenuItem eventKey="State">State</MenuItem>
                        <MenuItem eventKey="Capitals">Capitals</MenuItem>
                        <MenuItem eventKey="language">language</MenuItem>
                    </DropdownButton>
                {/*</ButtonGroup>*/}
               <Container cpm={this.state.cmp} />
            </div>
        )
    }
}

export default Dropdownbtn