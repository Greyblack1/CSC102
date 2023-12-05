function addButton(){
    console.log("Adding Start and Stop buttons");
    let addButton = document.getElementById("addButton");
    addButton.setAttribute("disabled","true");
    
    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "Start");
    inputElementStart.setAttribute("id","startButton")
    inputElementStart.setAttribute("onclick", "startButton();");

    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("id","stopButton")
    inputElementStop.setAttribute("onclick", "stopButton();");
    inputElementStop.setAttribute("disabled","true");


    let parent = document.getElementById("buttons");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);



}

function startButton(){
    console.log("Pressed Start");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled","true");
 
    
    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");
    
    let memeImage = document.getElementById("memes");
    memeImage.style.animationDuration = "2s";
    
}

function stopButton(){
    console.log("Pressed Stop");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");
    
    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled", "true");
    let memeImage = document.getElementById("memes");
    memeImage.style.animationDuration = "0s";

}