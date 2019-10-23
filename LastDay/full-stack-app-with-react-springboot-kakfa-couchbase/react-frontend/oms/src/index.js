import React from 'react';
import ReactDOM from 'react-dom';
import Customer from "./Customer.js";
import Order from "./Order.js";

ReactDOM.render(<Customer />, document.getElementById('customer'));
ReactDOM.render(<Order />, document.getElementById('order'));