import React, { Component } from 'react'
import Basicinfo from './Basicinfo'
import PersonalDetails from './PersonalDetails'
import OtherDetails from './OtherDetails'
import DisplayFeild from './DisplayFeild'
let temp=[];

class ListFeilds extends Component {
    constructor(){
        super();
        this.state={
            namecomponet:null,
            detailcomponet:null,
            othercomponet:null,
            displaycomponent:null,
            tofindchecked:false,
            name:"",age:0,phone:0,degree:"",numberoffeild:0,newfeild:[]
        }
    }
    createCmp (e) {
        let {name,age,phone,degree} =this.state;
        if(e.target.checked){
            switch(e.target.id){
                case 'newUser':{
                this.setState({newcomponet:<Basicinfo getData={this.getData.bind(this)}/>});
                break;   
                }
                case 'details':{
                this.setState({detailcomponet:<PersonalDetails getData={this.getData.bind(this)}/>});
                break;  
                }
                case 'others':{
                this.setState({othercomponet:<OtherDetails getcreatedfeilds={this.getcreatedfeilds.bind(this)}/>});
                break;   
                }
                case 'display':{
                 this.setState({displaycomponent:<DisplayFeild details={{name,age,phone,degree}} newfeilds={this.state.newfeild} numberoffeilds={this.state.numberoffeilds}/>});
                break;  
                }
                default:
                console.log("default");
            }
        }
        else{
          this.setState({newcomponet:null}); 
          this.setState({detailcomponet:null});
          this.setState({othercomponet:null}); 
          this.setState({displaycomponent:null});
        }
    }
     getData(refname,value){
         switch(refname){
             case "name":{
                 this.setState({name:value});
                 break;
             }
             case "age":{
                 this.setState({age:value});
                 break;
             }
              case "phone":{
                 this.setState({phone:value});
                 break;
             }
              case "degree":{
                 this.setState({degree:value});
                 break;
             }
             default:{
                 console.log("default");
             }
         }
    }
    getcreatedfeilds(value,number){
        // console.log(value);
        temp.push(value);
        // console.log(temp);
        this.setState({newfeild:temp});
        this.setState({numberoffeilds:number});
        //   console.log(this.state.newfeild);
    }
    render () {
        return (
            <div>
                <div className="well col-xs-9" >
                    <h4 className="text-center">CheckList</h4>
                    <input type="checkbox" id="newUser" onChange={this.createCmp.bind(this)}/>
                    <label htmlFor="newUser">UserName</label><br />
                         {this.state.newcomponet}
                    <input type="checkbox" id="details" onChange={this.createCmp.bind(this)}/>
                    <label htmlFor="details">Personal details</label><br />
                          {this.state.detailcomponet}
                    <input type="checkbox" id="others"  onChange={this.createCmp.bind(this)}/>
                    <label htmlFor="others">other details</label><br />
                           {this.state.othercomponet} 
                    <input type="checkbox" id="display" onChange={this.createCmp.bind(this)}/>
                    <label htmlFor="display">Display</label>
                            {this.state.displaycomponent} 
                </div>
            </div>    
        )
    }
}

export default ListFeilds