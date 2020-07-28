let btn = document.getElementById("addbtn");


addbtn.onclick = Task;
function Task() {
    let myli = document.createElement("li"); 
    let textarea = document.getElementById("text").value; 
    let list = document.createTextNode(textarea);
    myli.appendChild(list); 
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute('onclick', 'playSound()');
    myli.appendChild(checkbox);
    document.getElementById("text").value = ""; 

    if (textarea === '') { 
        console.log("Please enter a Task");
    } else {
        document.getElementById("schedule").appendChild(myli);
    }

    let del = document.createElement("del"); 
    let delBtn = document.createElement("button"); 
    delBtn.innerHTML = "Delete";
    del.className = "remove";
    del.appendChild(delBtn);
    myli.appendChild(del);

    let remove = document.getElementsByClassName("remove");
    let i;
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}


// function to play beep sound when checkbox is checked
function playSound(){

  let myAudio = new Audio('Airplane-Beep.mp3');
  myAudio.play();
}

