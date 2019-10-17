import React from 'react';
//import Redux from 'redux';
import {createStore} from 'redux'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.extractLoanFormValues = this.extractLoanFormValues.bind(this);
    this.onClickSubmitButton = this.onClickSubmitButton.bind(this);
    this.processLoan = this.processLoan.bind(this);
    this.updateLoanStatusInGUI = this.updateLoanStatusInGUI.bind(this);

    this.store = createStore(this.processLoan);
    this.updateLoanStatusInGUI();
    this.store.subscribe( this.updateLoanStatusInGUI );
  }

  updateLoanStatusInGUI() {
    alert ( "Your loan application status is " + this.store.getState() );
  }

  processLoan() {
    let status;

    if ( this.loanStatus === "undefined" ) {
      status = "AWAITING_LOAN_APPLICATION";
    }
    else if ( this.loanStatus === "LOAN_APPLICATION_SUBMITTED") {
      switch ( Math.round( Math.random() * 1 ) ) {
          case 0:
            status = "LOAN_REQUEST_APPROVED";
            break;
          case 1:
            status = "LOAN_REQUEST_REJECTED";
            break;
          default:
            status = "LOAN_APPLICATION_INCOMPLETE";
      }
    }

    return status;

  }

  extractLoanFormValues() {
    this.loanApplicantName = document.getElementById("loanApplicantName").value;
    this.gender = document.getElementById("gender").value;
    this.loanAmount = document.getElementById("loanAmount").value;
    this.loanDuration = document.getElementById("loanDuration").value;
    this.contactNumber = document.getElementById("contactNumber").value;
    //Test if the values entered in the react ui control is retrieved correctly
    console.log ( this.loanApplicantName );
    this.loanStatus = "LOAN_APPLICATION_SUBMITTED";
    this.store.dispatch({ type: 'LOAN_APPLICATION_SUBMITTED' })

  }

  onClickSubmitButton() {
    this.extractLoanFormValues();
    console.log('Extracted loan details ...');
  }

  render() {
    return (
      <div>
          <link href="./App.css" rel="stylesheet"></link>

          <h3>Loan App</h3>
          <table>
            <tbody id="tableBody">
            <tr>
              <td>Loan applicant fullname</td>
              <td><input type="text" id="loanApplicantName"></input></td>
            </tr>
            <tr>
              <td>Gender</td>
              <td><input type="text"  id="gender" list="sex"></input></td>
            </tr> 
            <tr>
              <td>Loan applicant contact number</td>
              <td><input type="text"  id="contactNumber"></input></td>
            </tr> 
            <tr>
              <td>Loan amount in Euros</td>
              <td><input type="number" id="loanAmount" min="1000.00" max="20000.00"></input></td>
            </tr>
            <tr>
              <td>Loan duration in years</td>
              <td><input type="number" id="loanDuration" min="1" max="5"></input></td>
            </tr> 
            <tr>
              <td><input type="text" id="loanStatus"></input></td>
            </tr> 
            </tbody>
          </table>
          <datalist id="sex"><option value="Male"></option><option value="Female"></option></datalist>
          <button id="submit" onClick={this.onClickSubmitButton}>Submit</button>
      </div>
    ); 
  } 

}
export default App;
