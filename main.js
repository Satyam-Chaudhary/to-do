let tasks = document.getElementById('tasks');
let textInput = document.getElementById('text-input');
let submit = document.getElementById('submit');
let reset = document.getElementById('reset-butt');

function addTask(){
    let li = document.createElement('li');
    li.innerHTML = textInput.value;
    if(li.innerHTML.trim() == ''){
        alert('Enter Valid Input');
        return;
    }
    tasks.appendChild(li);
    textInput.value = '';
}

textInput.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter'){
        addTask();
    }
})
submit.addEventListener('click', addTask);

reset.addEventListener('click', ()=>{
    while(tasks.firstChild != null){
        tasks.removeChild(tasks.firstChild);
    }
})

