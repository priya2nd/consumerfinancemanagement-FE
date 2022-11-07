import React, { Component } from 'react'

import '../style/register.css'
import AuthenticationService from '../service/AuthenticationService'
import UserService from '../service/UserService'


export default class Register extends Component {

    constructor(props) {
        super(props)
 
        this.state = {
            fields: {},
            errors: {}
          }
    
          this.handleChange = this.handleChange.bind(this);
          this.registerDealer = this.registerDealer.bind(this);   
    
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
   
    
    registerDealer = (d) => {
       
        d.preventDefault();

       if (this.validateForm()) {
            let fields = {};
            fields["name"] = "";
            // fields["dob"] = "";
            fields["email"] = "";
            fields["phoneNo"] = "";
            fields["userName"] = "";
            fields["password"] = "";
            fields["cpassword"] = "";
            fields["address"] = "";
            fields["card"] = "";
            fields["bank"] = "";
            fields["savings"] = "";
            fields["ifsc"] = "";
            this.setState({fields:fields});

            alert("Registered Successfully");
       
     d.preventDefault();
        let user = {emailId: this.state.fields.email, name: this.state.fields.name, userName: this.state.fields.userName, 
            password: this.state.fields.password, phoneNo: this.state.fields.phoneNo,
            address: this.state.fields.address,cardType: this.state.fields.card,bank: this.state.fields.bank,
        accountNo: this.state.fields.savings, ifscCode: this.state.fields.ifsc};

        console.log('User => ' + JSON.stringify(user));
 
        AuthenticationService.registerDealer(user).then(response =>{
            this.props.history.push('/login');
        });

    }
    else {
        alert("All Fields are Required!");
    }
    }

    resetForm = () => {
        
        this.state.fields.name = "";
        // this.state.fields.dob = "";
        this.state.fields.phoneNo = "";
        this.state.fields.email = "";
        this.state.fields.userName = "";
        this.state.fields.password = "";
        this.state.fields.cpassword = "";
        this.state.fields.address = "";
        this.state.fields.bank = "";
        this.state.fields.savings = "";
        this.state.fields.ifsc = "";
        this.state.fields.card = "";

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        console.log(fields);
  
    //    if (!fields["fname"]) {
    //       formIsValid = false;
    //       errors["fname"] = "*Please enter your First Name.";
    //     }
  
    //     if (typeof fields["fname"] !== "undefined") {
    //       if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
    //         formIsValid = false;
    //         errors["fname"] = "*Please enter alphabet characters only.";
    //       }
    //     }

    //     if (!fields["lname"]) {
    //         formIsValid = false;
    //         errors["lname"] = "*Please enter your Last Name.";
    //       }
    
    //       if (typeof fields["lname"] !== "undefined") {
    //         if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
    //           formIsValid = false;
    //           errors["lname"] = "*Please enter alphabet characters only.";
    //         }
    //       }
  
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["email"] !== "undefined") {
          //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
         
          if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "*Please enter valid email-ID.";
          }
        }
  
        if (!fields["phoneNo"]) {
          formIsValid = false;
          errors["phoneNo"] = "*Please enter your mobile no.";
        }
  
        if (typeof fields["phoneNo"] !== "undefined") {
          if (!fields["phoneNo"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["phoneNo"] = "*Please enter valid mobile no.";
          }
        }
  
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        // if (fields["password"] !== "undefined") {
        //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)) {
        //     formIsValid = false;
        //     errors["password"] = "*Please enter secure and strong password.";
        //   }
        // }

        if (!fields["cpassword"]) {
            formIsValid = false;
            errors["cpassword"] = "*Please enter password to confirm.";
        }

        console.log(this.state.fields.password);
        console.log(this.state.fields.cpassword);
        if (this.state.fields.password !== this.state.fields.cpassword) {
            formIsValid = false;
            errors["password"] = "*Please enter same password.";    
        }

        // if (!fields["street"]) {
        //     formIsValid = false;
        //     errors["street"] = "*Please enter your Street.";
        //   }

        if (!fields["userName"]) {
            formIsValid = false;
            errors["userName"] = "*Please enter user name.";
          }

        if (!fields["address"]) {
            formIsValid = false;
            errors["address"] = "*Please enter address.";
        }

        if (!fields["bank"]) {
            formIsValid = false;
            errors["bank"] = "*Please enter bank details.";
        }

        if (!fields["ifsc"]) {
            formIsValid = false;
            errors["ifsc"] = "*Please enter IFSC Code.";
        }

        if (!fields["savings"]) {
            formIsValid = false;
            errors["savings"] = "*Please enter Savings Account No.";
        }

        if (!fields["card"]) {
            formIsValid = false;
            errors["card"] = "*Please enter Card Type.";
        }

        // if (!fields["pincode"]) {
        //     formIsValid = false;
        //     errors["pincode"] = "*Please enter Pin Code";
        //   }
    
        //   if (typeof fields["pincode"] !== "undefined") {
        //     if (!fields["pincode"].match(/^[0-9]{6}$/)) {
        //       formIsValid = false;
        //       errors["phoneNo"] = "*Please enter valid Pin Code";
        //     }
        //   }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
    
      }

    cancel(){
        this.props.history.push('/');
    }
    
    registerUser() {

        if (!this.validateForm()) {
            alert("Req.")
        }
        else {
            let user = {emailId: this.state.fields.email, name: this.state.fields.name, userName: this.state.fields.userName, 
                password: this.state.fields.password, phoneNo: this.state.fields.phoneNo,
                address: this.state.fields.address,cardType: this.state.fields.card, bank: this.state.fields.bank,
            accountNo: this.state.fields.savings, ifscCode: this.state.fields.ifsc};
    
            
    
            console.log(this.state.fields.card);
            UserService.postUsers(JSON.stringify(user));
        }
        
    }
   

  render() {
    return (
        <div>
                <br></br>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               <h1 className="text-center">User Registration</h1>

                                <div className = "card-body">
                                    <form method="post"  name="userRegistrationForm"  onSubmit= {this.registerDealer}>
                                    
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Full Name" name="name" className="form-control" 
                                                value={this.state.fields.name} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.name}</div>
                                        </div>
                                        {/* <div className = "form-group">
                                            <label> Date of Birth: </label>
                                            <input type="date" name="dob" className="form-control" 
                                                value={this.state.fields.dob} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.dob}</div>
                                        </div> */}
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Id" name="email" className="form-control" 
                                                value={this.state.fields.email} onChange={this.handleChange}/>
                                                <div className="errorMsg">{this.state.errors.email}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone : </label>
                                            <input placeholder="Phone" name="phoneNo" className="form-control" 
                                                value={this.state.fields.phoneNo} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.phoneNo}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> User Name : </label>
                                            <input placeholder="userName" name="userName" className="form-control" 
                                                value={this.state.fields.userName} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.userName}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input type="password" placeholder="Password" name="password" className="form-control"
                                                value={this.state.fields.password} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.password}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Confirm Password: </label>
                                            <input type="cpassword" placeholder="cpassword" name="cpassword" className="form-control"
                                                value={this.state.fields.cPassword} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.cpassword}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input type="address" placeholder="address" name="address" className="form-control"
                                                value={this.state.fields.address} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.address}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Card Type : </label>
                                            <select name="card" className="form-control" 
                                                value={this.state.fields.card} onChange={this.handleChange}>
                                                    <option>Select Card</option>
                                                    <option>Gold</option>
                                                    <option>Titanium</option>
                                           </select>
                                           
                                        </div>
                                        <div className = "form-group">
                                            <label> Select Bank: </label>
                                            <input type="bank" placeholder="bank" name="bank" className="form-control"
                                                value={this.state.fields.bank} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.bank}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Savings Account No: </label>
                                            <input type="savings" placeholder="savings" name="savings" className="form-control"
                                                value={this.state.fields.savings} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.savings}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> IFSC Code: </label>
                                            <input type="ifsc" placeholder="ifsc" name="ifsc" className="form-control"
                                                value={this.state.fields.ifsc} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.ifsc}</div>
                                        </div>
                                        {/* <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lname" className="form-control" 
                                                value={this.state.fields.lname} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.lname}</div>
                                        </div> */}
                                        
                                        
                                        
                                        {/* <div className = "form-group">
                                            <label> Street : </label>
                                            <input placeholder="Street" name="street" className="form-control" 
                                                value={this.state.fields.street} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.street}</div>
                                        </div> */}
                                        

                                        {/* <div className = "form-group">
                                            <label> Pin Code : </label>
                                            <input placeholder="Pin code" name="pincode" className="form-control" 
                                                value={this.state.fields.pincode} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.pincode}</div>
                                        </div> */}
                                        <button className="btn btn-danger" onClick={this.resetForm} style={{marginLeft: "10px"}}>Reset</button>
                                        
                                        <input type="submit" onClick={this.registerUser.bind(this)} className="btn btn-success"  value="Register"/>
                                      
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
 
                   </div>
            </div>

    );
  }
}