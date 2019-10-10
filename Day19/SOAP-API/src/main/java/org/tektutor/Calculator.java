package org.tektutor;

import javax.jws.WebService;
import javax.jws.WebMethod;

@WebService
public class Calculator {

	@WebMethod
	public double add ( double firstInput, double secondInput ) {
		return firstInput + secondInput;
	}

	@WebMethod
	public double subtract ( double firstInput, double secondInput ) {
		return firstInput - secondInput;
	}

	@WebMethod
	public double mulitply ( double firstInput, double secondInput ) {
		return firstInput * secondInput;
	}

	@WebMethod
	public double divide ( double firstInput, double secondInput ) {
		return firstInput / secondInput;
	}

}
