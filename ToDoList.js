document.querySelector('#Add').onclick = function(){
    if(document.querySelector('#box1 input').value.length == 0){
        alert("Please add a Task")
    }
    else{
        document.querySelector("#task").innerHTML +=`<div id ="tasks"><span id ="taskname" >${document.querySelector("#box1 input").value}</span><button class = "delete"><i class="fa-regular fa-trash-can"></i></button></div>`;
    
        var currentTask = document.querySelectorAll(".delete");
        for(var i=0; i<currentTask.length; i++){
            currentTask[i].onclick=function(){
                this.parentNode.remove();
            }
        }
        
        var tasks = document.querySelectorAll("#tasks");
        for(var i =0; i<tasks.length; i++){
            tasks[i].onclick = function()
            {
                this.classList.toggle("completed");
            }
        }

        document.querySelector("#box1 input").value="";

    }
}
