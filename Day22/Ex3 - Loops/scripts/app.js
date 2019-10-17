function demoForLoop1() {
    for ( let i=0; i<5; ++i ) {

        if ( i == 3 ) {
            break; // Will come out of for loop if true
        }
        else {
            console.log( i );
            continue; // Will move onto next iteration
        }

    }
}

demoForLoop1();

function demoForLoop2() {
    let nums = [10,20,30];

    //Lambda anonymous function
    //Functional programming style
    nums.forEach( value => {
        console.log( value );
    });

    //Equivalent code of above in
    //non-functional programming style
    let len = nums.length;
    for ( let index=0; index < len; ++index) {
        console.log ( nums[index] );
    }

}

//demoForLoop2();


//While loop
function demoWhileLoop() {
    let languages =[ 'C++', 'Java', 'JavaScript' ];

    languages.push( 'C#' );
    languages.push ( 'Python' );

    let index = 0;
    let len = languages.length;
    
    console.log( 'While Loop Demo' );
    while ( index < len ) {
        console.log ( languages[index++] );
    }
}

//demoWhileLoop();


//Do while loop
function demoDoWhileLoop() {

    let index = 10;

    do {
        console.log ( index-- ); 
    } while ( index > 0);

}

//demoDoWhileLoop();

//Switch statement
function demoSwitchStatement() {

    let today = new Date();
    console.log( today );

    switch ( today.getDay() ) {
        case 0:
            console.log ('Sunday');
            break;
        case 1:
            console.log ('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log('default');
    }
}

//demoSwitchStatement();


function demoTernaryOperator() {

    console.log (
        10 > 20 ? '10 is greater': '20 is greater'
    );
    
}

// demoTernaryOperator();

// let biggest = ( 10 > 20 ) ? 'Ten' : 'Twenty';
// console.log ( 'Biggest is ' + biggest );

// //Equivalent of ternatory operation is below old style code
// if ( 10 > 20 ) {
//     biggest = 10;
// }
// else {
//     biggest = 20;
// }

// console.log ( 'Biggest is ' + biggest );

// let nums = [];
// let value = 0;

//Pushes 5 random numbers within 1 to 20 range
//into nums array
// for ( let x = 0; x<5; ++x ) {
//     value = ( Math.random() * 20) + 1;
//     value = Math.round( value );
//     nums.push ( value );
// }
// console.log ( 'Array elements before sorting ...');
// console.log ( nums );

// num = nums.sort ( (x, y) => {
//     console.log ( "" + x + "  ==> " + y );
//     return x-y;   
// });

// console.log ( 'Array elements after sorting ...');
// console.log ( nums );
















