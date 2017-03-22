import React, { Component } from 'react'
class OtherDetails extends Component {
    constructor(){
        super();
        this.state={
            numberoffeild:1,
        }
    }
    getData(e){
        this.props.getcreatedfeilds(e.target.value,this.state.numberoffeild);
    }
    addFeild(){
        this.setState({numberoffeild:this.state.numberoffeild+1});
        let newarry=[];
        let listnew=<div><input type="text" placeholder="feild name" onBlur={this.getData.bind(this)}/><input type="text" placeholder="feild description" onBlur={this.getData.bind(this)}/></div>
        if(this.state.numberoffeild<=3){
            for(let i=0;i<this.state.numberoffeild;i++){
                newarry.push(React.cloneElement(istnew,{key:i}));
            }
            this.setState({addnewfeild:newarry})
        }
        else{
            alert("only 3 feilds can be added");
        }
    }
    render () {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.addFeild.bind(this)}>add</button>
                {this.state.addnewfeild}
            </div>
        )
    }
}

export default OtherDetails