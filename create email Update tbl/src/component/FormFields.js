import React, { Component } from 'react'

class FormFields extends Component {
    getValues(){
        let email=this.refs.email.value;
        let pass=this.refs.password.value;
        let repass=this.refs.confirmpassword.value;
        if(email!=""&&pass!=""&&repass!=="")
        {
            if(pass===repass)
                this.props.actions.updatingValue(email,pass,repass);
            else
                alert("password and confrim password are not matching")
        }
        this.refs.email.value=""
        this.refs.password.value=""
        this.refs.confirmpassword.value=""
    }
    render () {
        return (
            <div>
                <form>
                   <div className="form-group row">
                     <label className="col-sm-2 form-control-label">Email</label>
                         <div className="col-sm-10">
                            <input type="email" className="form-control" placeholder="Email" ref="email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 form-control-label">Password</label>
                         <div className="col-sm-10">
                             <input type="password" className="form-control" placeholder="Password" ref="password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 form-control-label">Confirm Password</label>
                         <div className="col-sm-10">
                             <input type="password" className="form-control" placeholder="Re-enter Password" ref="confirmpassword"/>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success" onClick={()=>{this.getValues()}}>submit</button>
                </form>    
            </div>
        )
    }
}

export default FormFields