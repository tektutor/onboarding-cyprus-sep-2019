
function sayHello() {
    //This is a javascript pop-up alert message

    //DOM - Document Object Model - represents the entire html tree document
    //console.log ( document );

    //document.writeln ( 'You can write directly to browser window!')

    //ES5 style of retrieving value from form input controls - old style
    var name = document.getElementById("nameId").value;
    alert ( 'Hello ' +  name + "!" );

    //ES6 style of retrieving value from form input controls by Id - new style
    let contactName = document.querySelector("#nameId").value;
    console.log( contactName );

    //ES6 sytle of retrieving value from form input controls by Name - new style
    contactName = document.querySelector("input[name='contactName']").value;
    console.log( contactName );

    console.log(name);

    //Taking input from user
    let message = prompt('Enter your message');
    console.log ( message );

}

//This is how you would invoke a javascript function
//sayHello();

function add( firstInput=1.0, secondInput=2.0 ) {

    //String  to numeric data conversion - only works if numeric data is represented by string
    firstInput = Number ( firstInput );
    secondInput = Number ( secondInput );

    //NaN - represents Not a Number. e.g: 'Hello' is NaN
    if ( Number.isNaN(firstInput) || Number.isNaN( secondInput ) ) {
        console.warn ( 'First Input ' + firstInput );
        console.warn ( 'Second Input ' + secondInput );
        console.error( '#Invalid input type, please provide a numeric type inputs');

        return;
    }

    console.clear();

    let result = firstInput + secondInput;
    console.log ( 'The sum of %d and %d is %d.', firstInput, secondInput, result );
}

add ( 10, 20);
add ( 'Hello', ' World!' ); // We didn't expect this. We would like to restrict to numeric types
add ( ); //It picks the default value 1.0 as firstInput and 2.0 as secondInput
add ('10.5', '20.5');