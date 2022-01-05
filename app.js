let section = document.querySelector("section")
let add = document.querySelector("form button");

add.addEventListener("click", (e) =>{
    // prevent form data submit
    e.preventDefault();

    // get the input value
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDay = form.children[2].value;

    if (todoText === "") {
        alert("Please input some text");
        return;
    }

    // create a todo
    let todo = document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = todoText;
    let time = document.createElement("p");
    time.classList.add("todo-time");
    time.innerText = todoMonth + "/" + todoDay;
    todo.appendChild(text);
    todo.appendChild(time);

    // create green check and red trash
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.addEventListener("click", (e) => {
        let todoItem = e.target.parentElement;
        todoItem.classList.toggle("done");

    });

    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';

    trashButton.addEventListener("click", (e) => {
        let todoItem = e.target.parentElement;
        let myList = localStorage.getItem("todo_list");
        let myListArray = JSON.parse(myList);
        let text = todoItem.querySelector("p").innerText;
        let newArray = []
        myListArray.forEach(item=>{
            if (item["todoText"] !== text) {
                newArray.push(item);
            }
        })
        localStorage.setItem("todo_list", JSON.stringify(newArray));

        todoItem.addEventListener("animationend", (e) => {
            todoItem.remove();
        })
        todoItem.style.animation = "scaleDown 0.5s forwards";
    })

    todo.appendChild(completeButton);
    todo.appendChild(trashButton);

    todo.style.animation = "scaleup 0.5s forwards";

    // create data struct;
    let myTodo = {
        todoText: todoText,
        todoMonth: todoMonth,
        todoDay: todoDay
    }
    // store data into localStorage
    let myList = localStorage.getItem("todo_list");
    let myListArray;
    if (myList == null) {
        myListArray = [];
    } else {
        myListArray = JSON.parse(myList);
    }

    let newArray = [];
    myListArray.forEach(item => {
        if (item["todoText"] !== todoText) {
            newArray.push(item)
        }
    })
    newArray.push(myTodo);
    myListArray = newArray;
    localStorage.setItem("todo_list", JSON.stringify(myListArray));
    section.appendChild(todo);
    form.children[0].value = ""
})


// sort 
let btn_sort = document.querySelector("div.sort button");
btn_sort.addEventListener("click", (e) => {
    let todoNodeList = document.querySelectorAll("section div");
    todoNodeList.forEach(item => {
        item.addEventListener("animationend", (e) => {
                item.remove();
            })
        item.style.animation = "scaleDown 0.5s forwards";
    })

    let myList = localStorage.getItem("todo_list");
    if (myList !== null) {
        let myListArray = JSON.parse(myList);
        myListArray = mergeSortArray(myListArray);

        myListArray.forEach(item => {
            // create a todo
            todoText = item["todoText"];
            todoMonth = item["todoMonth"];
            todoDay = item["todoDay"];

            let todo = document.createElement("div");
            todo.classList.add("todo");
            let text = document.createElement("p");
            text.classList.add("todo-text");
            text.innerText = todoText;
            let time = document.createElement("p");
            time.classList.add("todo-time");
            time.innerText = todoMonth + "/" + todoDay;
            todo.appendChild(text);
            todo.appendChild(time);

            // create green check and red trash
            let completeButton = document.createElement("button");
            completeButton.classList.add("complete");
            completeButton.innerHTML = '<i class="fas fa-check"></i>';
            completeButton.addEventListener("click", (e) => {
                let todoItem = e.target.parentElement;
                todoItem.classList.toggle("done");

            });

            let trashButton = document.createElement("button");
            trashButton.classList.add("trash");
            trashButton.innerHTML = '<i class="fas fa-trash"></i>';

            trashButton.addEventListener("click", (e) => {
                let todoItem = e.target.parentElement;
                let myList = localStorage.getItem("todo_list");
                let myListArray = JSON.parse(myList);
                let text = todoItem.querySelector("p").innerText;
                let newArray = []
                myListArray.forEach(item=>{
                    if (item["todoText"] !== text) {
                        newArray.push(item);
                    }
                })
                localStorage.setItem("todo_list", JSON.stringify(newArray));

                todoItem.addEventListener("animationend", (e) => {
                    todoItem.remove();
                })
                todoItem.style.animation = "scaleDown 0.5s forwards";
            })

            todo.appendChild(completeButton);
            todo.appendChild(trashButton);

            todo.style.animation = "scaleup 0.5s forwards";

            section.appendChild(todo);

        });
    }
})

let myList = localStorage.getItem("todo_list");
if (myList !== null) {
    let myListArray = JSON.parse(myList);
    myListArray.forEach(item => {
        // create a todo
        todoText = item["todoText"];
        todoMonth = item["todoMonth"];
        todoDay = item["todoDay"];

        let todo = document.createElement("div");
        todo.classList.add("todo");
        let text = document.createElement("p");
        text.classList.add("todo-text");
        text.innerText = todoText;
        let time = document.createElement("p");
        time.classList.add("todo-time");
        time.innerText = todoMonth + "/" + todoDay;
        todo.appendChild(text);
        todo.appendChild(time);

        // create green check and red trash
        let completeButton = document.createElement("button");
        completeButton.classList.add("complete");
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.addEventListener("click", (e) => {
            let todoItem = e.target.parentElement;
            todoItem.classList.toggle("done");

        });

        let trashButton = document.createElement("button");
        trashButton.classList.add("trash");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';

        trashButton.addEventListener("click", (e) => {
            let todoItem = e.target.parentElement;
            let myList = localStorage.getItem("todo_list");
            let myListArray = JSON.parse(myList);
            let text = todoItem.querySelector("p").innerText;
            let newArray = []
            myListArray.forEach(item=>{
                if (item["todoText"] !== text) {
                    newArray.push(item);
                }
            })
            localStorage.setItem("todo_list", JSON.stringify(newArray));

            todoItem.addEventListener("animationend", (e) => {
                todoItem.remove();
            })
            todoItem.style.animation = "scaleDown 0.5s forwards";
        })

        todo.appendChild(completeButton);
        todo.appendChild(trashButton);

        todo.style.animation = "scaleup 0.5s forwards";

        section.appendChild(todo);

    });
}

function mergeSortTime(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {

        let arr1_month = Number(arr1[i].todoMonth);
        let arr2_month = Number(arr2[j].todoMonth);

        if (arr1_month < arr2_month) {
            result.push(arr1[i]);
            i++;
        }else if (arr1_month > arr2_month) {
            result.push(arr2[j]);
            j++;
        }else {

            let arr1_day = Number(arr1[i].todoDay);
            let arr2_day = Number(arr2[j].todoDay);

            if (arr1_day < arr2_day) {
                result.push(arr1[i]);
                i++;
            }else {
                result.push(arr2[j]);
                j++;
            }
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    console.log(result);
    return result;
}

function mergeSortArray(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left_arr = arr.slice(0, middle);
    let right_arr = arr.slice(middle, arr.length);

    return mergeSortTime(mergeSortArray(left_arr), mergeSortArray(right_arr));
}