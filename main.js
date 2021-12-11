


let input = document.querySelector(".input");

let add = document.querySelector(".add");


window.onload = function () {
    input.focus();
}

let tasks  = document.querySelector(".tasks");

add.addEventListener("click" , function (event){
           
    // Create Element of Task

           let task = document.createElement("h3");
           let btnDelete = document.createElement("button");
           let textDelete = document.createTextNode("Delete");       
           btnDelete.className = "btn";
           let divCopy = document.createElement("div");
           divCopy.className = "div-copy";

    if (input.value == "") {
        event.preventDefault();
    }
    else
    {
        // Create Task Content
    let taskContent = document.createTextNode(input.value);
    // console.log(taskContent);
    task.appendChild(taskContent);

    btnDelete.appendChild(textDelete);
    divCopy.appendChild(task);
    divCopy.appendChild(btnDelete);
    tasks.appendChild(divCopy);

    input.value = '';
    }
    

});


// Remove The Task
document.addEventListener("click" , (e)=>{
   
    // console.log(e.target);
    if (e.target.className == 'btn') {
        e.target.parentNode.remove();
    }
});



