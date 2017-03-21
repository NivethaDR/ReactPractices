import React, { Component } from 'react'
import InputField from './InputField'
import Leftsidecontainer from './Leftsidecontainer'
import Rightsidecontainer from './Rightsidecontainer'
// import Button from './Button'

class App extends Component {
    constructor(props){
        super(props);
         this.state={
             leftdata:[],
             rightdata:[],
             movecontentright:[],
             movecontentleft:[]
         }
    }
    updateLeft(e){
        this.setState({leftdata:[e,...this.state.leftdata]})
    }
     updateRight(e){
        this.setState({rightdata:[e,...this.state.rightdata]})
    }
    moveright(){
        let right=[...this.state.rightdata],flag=0;
        for(let i=0;i<this.state.leftdata.length;i++){
                flag=0
             for(let j=0;j<this.state.rightdata.length;j++){
                if(this.state.leftdata[i]===this.state.rightdata[j]){
                  flag=1;
                  break;
                }
             }
             if(flag==0)
             right.push(this.state.leftdata[i]);
        }
         this.setState({movecontentright:right});
    }
    moveleft(){
      var left=[...this.state.leftdata],flag=0;
        for(let i=0;i<this.state.rightdata.length;i++){
                flag=0
             for(let j=0;j<this.state.leftdata.length;j++){
                if(this.state.leftdata[j]===this.state.rightdata[i]){
                  flag=1;
                  break;
                }
             }
             if(flag==0)
             left.push(this.state.rightdata[i]);
        }

         this.setState({movecontentleft:left});
    }
    resetfields(){
        this.setState({movecontentleft:[]});
        this.setState({movecontentright:[]});
    }
    render () {
        return (
            <div className='container'>
                <InputField leftcontent={this.updateLeft.bind(this)} rightcontent={this.updateRight.bind(this)}/><hr/>
               <div className='container'>
                    <Leftsidecontainer savingleft={this.state.leftdata} movedleft={this.state.movecontentleft}/>
                      <button type="button" className="btn btn-primary" onClick={this.moveright.bind(this)}>moveright</button>
                      <button type="button" className="btn btn-primary" onClick={this.moveleft.bind(this)}>moveleft</button>
                    <Rightsidecontainer savingright={this.state.rightdata} movedright={this.state.movecontentright}/>
                        <button type="button" className="btn btn-secondary" onClick={this.resetfields.bind(this)}>Reset</button>
                </div>
            </div>
        )
    }
}

export default App