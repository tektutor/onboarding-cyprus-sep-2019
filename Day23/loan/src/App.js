import React from 'react';
  
class App extends React.Component {

  constructor(props) {
    super(props);
    this.onClickSubmitButton = this.onClickSubmitButton.bind(this);
  }

  extractLoanFormValues() {
    this.loanApplicantName = document.getElementById("loanApplicantName").value;
    this.gender = document.getElementById("gender").value;
    this.loanAmount = document.getElementById("loanAmount").value;
    this.loanDuration = document.getElementById("loanDuration").value;
    this.contactNumber = document.getElementById("contactNumber").value;
    this.loanStatus = document.getElementById("loanStatus");
    //Test if the values entered in the react ui control is retrieved correctly
    console.log ( this.loanApplicantName );
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
            <tbody>
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
              <td><label id="loanStatus"></label></td>
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
