
function validateInput(event){
    event.preventDefault();
    let audioElement = document.getElementById("backgroundAudio");

    let firstName= document.getElementById("fName").value;
    console.log(firstName);
    let lastName= document.getElementById("lName").value;
    console.log(lastName);
    let zip= document.getElementById("zip").value;
    console.log(zip);
    let firstlast = firstName + " " + lastName;
    console.log(firstlast);

    console.log(firstlast.length);
    var nameValid = true; 
    var zipValid = true
    if(firstlast.length < 20){
        alert("Not enough characters. Your first and last name must have at least 20 Characters");
        let nameValid = false;
        return;
    }
    console.log("First last valid");

    if(zip.length != 5 || (!Number.isInteger(zip) && parseInt(zip) < 9999)) {
        alert("Invalid Zip, Must be 5 numbers");
        console.log(typeof zip);
        let zipValid = false;
        return ;
    }
    console.log("valid zip")

    if( nameValid != 0 && zipValid != 0){
        alert("Welcome to the Zach Zone");
        location.replace("CSC 102.html");  
    }
    
}

window.addEventListener("DOMContentLoaded", (event) =>{
    const form = document.getElementById("myform");
if(form){
    form.addEventListener('submit',validateInput)
}
var clicked = false;

window.addEventListener("click",(event) =>{
    if(!clicked){
        //when clicked, play music and set clicked to true
        let audioSources = ["96c4a22c-f139-4d46-83d8-2333c8710a54.mp3","rick.mp3", "96c4a22c-f139-4d46-83d8-2333c8710a54.mp3"];

        let audioElement = document.getElementById("backgroundAudio");

        audioElement.src = audioSources[1];
        audioElement.loop = true;
        audioElement.play();

        clicked = true;


        
    }
});

});
