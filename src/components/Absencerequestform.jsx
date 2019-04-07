import React from "react";
import "./Absencerequestform.css";
import { Nav, Navbar } from "react-bootstrap";





export default class Absencerequestform extends React.Component {
  constructor(props) {
    super(props);
    
   
    this.state = {
      valuestart: "",
      valueend: "",
      errorstart:"",
      errorend:"",
      date: new Date()
    };

    this.handleChangestart = this.handleChangestart.bind(this);
    this.handleChangeend = this.handleChangeend.bind(this);

  };

  handleChangestart(event) {
    let date = new Date()
    if(Date.parse(event.target.value) > Date.parse(date.toDateString()) ){
      this.setState({valuestart: event.target.value})
    }
    if(Date.parse(event.target.value) < Date.parse(date.toDateString()) ){
      this.setState({errorstart:"invalid date"})
    }else{
      this.setState({errorstart:""})
    }
  }

  handleChangeend(event) {
    let date = new Date()
    if(Date.parse(event.target.value) > Date.parse(date.toDateString()) ){
      this.setState({valueend: event.target.value});
    }
    if(Date.parse(event.target.value) < Date.parse(date.toDateString()) ){
      this.setState({errorend:"invalid date"})
    }else{
      this.setState({errorend:""})
    }

  }
  

    render(){
      let start = Date.parse(this.state.valuestart)
      let end = Date.parse(this.state.valueend)
  
      if(end < start ){
        this.setState({valueend: ""})
        this.setState({errorend:"invalid date"})
      }
      
      let duration = Math.round((end - start) * (1.1574 * 0.00000001)) 
  
        return (
            <div>
              <div>
              <Navbar bg="primary"  expand="lg" default collapseOnSelect >
                <Navbar.Brand href="/">Corporate TimeOff</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/teamview">Team View</Nav.Link>
                <Nav.Link href="/absencerequest">New Request</Nav.Link>
                </Nav>
            
               </Navbar>
                </div>   
    <div class="modal-dialog">
              
    <div class="modal-content">
    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">New request</h5>
      </div>
      <div class="modal-body">

          
          <div class="form-group">
            <label class="control-label">Type</label>
            <select class="form-control adjust"  required>
                <option></option>
                <option value="0" data-tom="Vacation">Vacation</option>
                <option value="1" data-tom="International Conference">International Conference</option>
                <option value="2" data-tom="Sick Leave">Sick Leave</option>
                <option value="3" data-tom="Maternity Leave">Maternity Leave</option>
                <option value="4" data-tom="Paternity Leave">Paternity Leave</option>
                <option value="5" data-tom="other">Other</option>
            </select>
            <div className="errorMsg"></div>
          </div>

          <div class="form-group">
            <label for="from" class="control-label">From</label>
            <div class="row">
              <div class="col-md-5">
                <select class="form-control" name="from_date_part">
                  <option></option>
                  <option value="1" selected="selected">All day</option>
                  <option value="2">Morning</option>
                  <option value="3">Afternoon</option>
                </select>
              </div>
              <div class="col-md-7">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                  <input type="date"  id="start" name="trip-start"  min="2019-04-06" max="2019-12-31" required
                   onChange={this.handleChangestart} />
                    <p> {this.state.errorstart}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="to" class="control-label">To</label>
            <div class="row">
              <div class="col-md-5">
                <select class="form-control" name="to_date_part">
                  <option value="1" selected="selected">All day</option>
                  <option value="2">Morning</option>
                  <option value="3">Afternoon</option>
                </select>
              </div>
              <div class="col-md-7">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                  <input type="date" id="end" name="trip-start"
                  min="2019-04-06" max="2019-12-31" required
                   onChange={this.handleChangeend}  />
                   <p>{this.state.errorend}</p>
                  
                </div>
                <div>
                      <label htmlFor="name">Duration:</label>
                      <input type="text" id="name" name="name" disabled placeholder={duration}></input>
                  </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="leave_type" class="control-label">Reason</label>
            <textarea class="form-control" id="leave_reason" name="reason"></textarea>
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-success">Submit</button>
          <input type="hidden" name="redirect_back_to" value="/calendar/" />
      </div>
    </form>
    </div>
  </div>
  <div><footer>&copy;Corporate TimeOff 2019</footer></div>
  </div>
  
        );
    }
}