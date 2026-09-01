const input = document.getElementById("input");
const task = document.getElementById("task");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    if (input.value.trim() === "") {
        return;
    }

    const list = document.createElement("li");
    list.append(input.value.trim());

    const complete = document.createElement("button");
    complete.textContent = "complete";
    complete.addEventListener("click",()=>{
        list.style.textDecoration="line-through";
    });

    const dlt = document.createElement("button");
    dlt.textContent = "delete";
    dlt.addEventListener("click",()=>{
        list.remove();
    });

    list.appendChild(complete);
    list.appendChild(dlt);
    task.appendChild(list);
    input.value="";
});

