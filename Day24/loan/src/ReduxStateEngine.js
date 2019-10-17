import {createStore} from 'redux'

class ReduxStateEngine {

    constructor(props) {
        this.processLoan = this.processLoan.bind(this);    
        this.store = createStore(this.processLoan);
        this.processLoan();
    }

    subscribeToLoanStatusEvents( loanStatusEventHandler ) {
        this.store.subscribe ( loanStatusEventHandler );
    }

    getLoanStatus() {
        console.log ( this.store.getState() );
        return this.store.getState();
    }

    submitLoanApplication ( ) {
        this.store.dispatch({ type: 'LOAN_APPLICATION_SUBMITTED' });
        this.loanStatus = 'LOAN_APPLICATION_SUBMITTED';
        console.log ( "Received application.")
    }

    processLoan() { 
        if ( this.loanStatus === "undefined" ) {
          this.loanStatus = "YET_TO_APPLY_LOAN";
        }
        else if ( this.loanStatus === "LOAN_APPLICATION_SUBMITTED") {
          switch ( Math.round( Math.random() * 1 ) ) {
              case 0:
                this.loanStatus = "LOAN_APPLICATION_APPROVED";
                break;
              case 1:
                this.loanStatus = "LOAN_APPLICATION_REJECTED";
                break;
              default:
                this.loanStatus = "LOAN_APPLICATION_INCOMPLETE";
          }
        }
    
        return this.loanStatus;
    
      }    
}

export default ReduxStateEngine;