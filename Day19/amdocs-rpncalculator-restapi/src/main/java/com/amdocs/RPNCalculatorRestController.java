package com.amdocs;

import java.util.Formatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RPNCalculatorRestController {

	@Autowired
	private RPNCalculator rpnCalculator;
					
	@RequestMapping(path="/rpncalculator/{rpnExpression}", method=RequestMethod.GET, produces={"application/xml","application/json"})
	@ResponseBody
	public String evaluate (@PathVariable("rpnExpression") String rpnMathExpression ) {
		double result = rpnCalculator.evaluate(rpnMathExpression);
					
		StringBuilder strBuilder = new StringBuilder();
		Formatter formatter = new Formatter( strBuilder );
		
		formatter.format("<rpn-calculator><result>%f</result></rpn-calculator>",result); 

		String response = formatter.toString();
		formatter.close();
		
		return response;
	}
	
	@GetMapping("/rpncalculator/{rpnExpression}")
	public String evaluate1 (@PathVariable("rpnExpression") String rpnMathExpression ) {
		double result= rpnCalculator.evaluate(rpnMathExpression);
		
		StringBuilder strBuilder = new StringBuilder();
		Formatter formatter = new Formatter( strBuilder );
		
		formatter.format("{ \"result\": %f }",result); 

		String response = formatter.toString();
		formatter.close();
		
		return response;
	}
	
	
}