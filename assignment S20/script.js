
let add = document.querySelector("#add");


let todoWrapper = document.querySelector(".todo-wrapper");


add.addEventListener("click",()=>{

    let input = document.querySelector("#input").value;

    if(input.length > 5){

        let li = document.createElement("li");
        let text = document.getElementById("input");


        li.className = "todo";


        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id="todo-list";


        li.appendChild(checkbox);


        li.appendChild(document.createTextNode(text.value));


        todoWrapper.appendChild(li);


        document.querySelector("#input").value = "";

    }

    else {
        alert("It must be greater than 5 characters");
    }
}); 


function deleteItems(){
    let i;

    let ul = document.getElementById("tasks");

    let items = ul.getElementsByTagName("li");

    for (i=0; i<items.length; i++){
        if(items[i].firstChild.checked)
        {
            ul.removeChild(items[i]);
            i=i-1;
        }
    }
}