
// function enrollName() {

//     //We are retrieving the div section by class name .listOfVolunteers
//     let listOfVolunteers = document.querySelector(".listOfVolunteers");

//     //We are retreiving the volunteer name fed by end-user
//     let nameOfVolunteer = document.querySelector("input[name='volunteerName']").value;

//     //This appends the volunteer name retreieved to existing unordered list
//     listOfVolunteers.innerHTML += "<ul><li>" + nameOfVolunteer + "</li></ul>";

//     console.log ('Added new volunteer ...');
// }

function enrollName() {

    //We are retrieving the unorder list element by id
    let listOfVolunteers 
        = document.querySelector("#unordered-list");

    //We are retreiving the volunteer name fed by end-user
    let nameOfVolunteer = document.querySelector("input[name='volunteerName']").value;
  
    let volunteer = document.createElement("li");
    volunteer.appendChild( document.createTextNode(nameOfVolunteer) );

    listOfVolunteers.appendChild ( volunteer );

    console.log ('Added new volunteer ...');
}