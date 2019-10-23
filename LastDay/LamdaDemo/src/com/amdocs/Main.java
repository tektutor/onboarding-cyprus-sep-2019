package com.amdocs;

import java.util.ArrayList;
import java.util.stream.IntStream;
import java.util.stream.Stream;

interface MaxIntegerInterface {
	int max ( int a, int b );
}

public class Main {
	
	public static int getMax( int x, int y ) {
		return  x > y ? x : y;  //Ternary operator
	}

	public static void main(String[] args) {
		//Traditional - old style
		ArrayList<Integer> numbers = new ArrayList<Integer>();
		
		numbers.add(10);
		numbers.add(10);
		numbers.add(20);
		numbers.add(30);
		
		//printArray( numbers );
		
		//Functional Programming style Lambda Function
		//numbers.forEach( value -> System.out.print(value + "\t") );
		
		int max = getMax ( 10, 20 );
		System.out.println("Max value is " + max);
	
		MaxIntegerInterface instance = (x,y) -> (x>y) ? x : y;	
		System.out.println("The max value is " + instance.max(10, 20));
		
		Stream<Integer> intStream = numbers.stream();
		System.out.println(intStream.count());
		
		//This will only print the unique numbers in the array list
		Stream<Integer> stream2 = numbers.stream();
		stream2.distinct().forEach(  value -> System.out.println(value ));
				
		//This will find the sum of all the numbers in the array list
		int sum = numbers.stream().reduce(0, (x, y) -> x + y );
		System.out.println("The sum of all numbers in list is " + sum );
		
		System.out.println("Current elements in the array list are ...");
		System.out.println(numbers);

		System.out.println("Add value 5 to each element in the array list are ...");
		numbers.stream().forEach( v ->  {   
			v += 5;
			System.out.print( v + "\t" );
		} );

		System.out.println("Original array is left unmodified after the above lambda operation");
		System.out.println(numbers);

	}

	private static void printArray(ArrayList<Integer> numbers ) {		
		int length = numbers.size();
		
		for ( int index=0; index < length; ++index ) {
			System.out.print( numbers.get(index) + "\t" );
		}
	}
	
}
