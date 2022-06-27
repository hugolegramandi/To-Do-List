const taskList = document.querySelector('#taskList');
const newTask = document.querySelector('#newTask');
const addTask = document.querySelector('#addTask');
const submit = document.querySelector('#newTask');
const optionsList = document.querySelector('#optionsList');
newTask.focus();

submit.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector('#addTask').click();
    }
  });

addTask.addEventListener('click', function(){
    const textTask = newTask.value;
    if(newTask.value === ''){
        alert("Tarefa Vazia");
    }
    else{
        newTask.value = '';
        taskList.appendChild(addNewTask(textTask));
        showOptions();
        newTask.focus();
    }        
})

function addNewTask(textTask){
    const elementLi = document.createElement('li');
    const elementSpan = document.createElement('span');

    elementSpan.setAttribute('id', 'task');
    elementSpan.textContent = textTask;

    elementLi.className = 'ongoing';
    elementLi.appendChild(elementSpan);
    elementLi.appendChild(addRemoveButton());

    elementSpan.addEventListener('click', function(){
        if(this.id === 'task'){
            if(this.parentNode.className === "ongoing"){
                this.parentNode.className = 'done'
            }
            else{
                this.parentNode.className = 'ongoing'
            }
        }
    })

    return elementLi
}

function addRemoveButton(){
    const removeButton = document.createElement('button');
    removeButton.textContent = "✖"
    removeButton.className = 'removeButton'

    removeButton.addEventListener('click', function(){
        taskList.removeChild(this.parentNode);
        showOptions();
    })

    return removeButton;
}

function showOptions(){
    const elementSpan = document.querySelector('#task');
    if(elementSpan === null){
        optionsList.setAttribute('hidden','hidden');
    } else {
        optionsList.removeAttribute('hidden');
    }
}

optionsList.addEventListener('change',function(){
    if(optionsList.selectedIndex === 1 || optionsList.selectedIndex === 2){
        const vetorTask = taskList.querySelectorAll('#task');
        for(task of vetorTask){
            task.dispatchEvent(new Event('click'));
        }
    } else if(optionsList.selectedIndex === 3){
        const vetorButtons = taskList.querySelectorAll('.removeButton');
        for(button of vetorButtons){
            button.dispatchEvent(new Event('click'));
        }
    }
})


