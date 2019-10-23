import React from 'react';
import {Component} from 'react';
import axios from 'axios';

class Order extends Component {

  constructor(props) {
    super(props);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onSubmitClick = () => {
    console.log("Order submit button clicked");

    this.customerID = document.getElementById("orderCustomerID").value;
    this.itemName = document.getElementById("itemName").value;
    this.shippingAddress = document.getElementById("orderShippingAddress").value;

    console.log ( this.customerID );
    console.log ( this.itemName );
    console.log ( this.shippingAddress );
     
    let newOrder = {
          id: this.customerID,
          name: this.itemName,
          shippingAddress: this.shippingAddress
    };

    (async () => {
      const response = await axios( {
        url: 'http://localhost:8089/neworder',
        method: 'post',
        headers: {
          "content-type": "application/json" 
        },
        data: newOrder
      });
      console.log(response);
      }
    )(); console.log ("Submit button clicked");
  }

  render() {
    return (
      <div className="Order">
        <header className="order">
            <h2>Manage Order</h2>
          <table>
            <tbody>            
              <tr>
              <td><label>Customer ID</label></td>
              <td><input type="number" id="orderCustomerID"></input></td>
            </tr>
            <tr>
              <td><label>Item Name</label></td>
              <td><input type="text" id="itemName"></input></td>
            </tr>
            <tr>
              <td><label>Shipping Address</label></td>
              <td><input type="text" id="orderShippingAddress"></input></td>
            </tr>
            </tbody>

          </table>
          <button id="submit" onClick={ this.onSubmitClick }>Submit</button>
        </header>
      </div>
    );
  }
}

export default Order;