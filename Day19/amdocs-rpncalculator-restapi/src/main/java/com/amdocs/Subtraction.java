package com.amdocs;

public class Subtraction implements IMathOperation {

	@Override
	public double evaluate(double firstNumber, double secondNumber) {
		return firstNumber - secondNumber;
	}

}