
//Guardar informacion de los dates en variables
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

//Recuperando el contendeor de Tareas

const contenedorTareas = document.getElementById("contenedorTareas");

//Funcion para setear nuestros valores

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es',{day: 'numeric'});
    dateText.textContent = date.toLocaleString('es',{weekday : 'long'});
    dateMonth.textContent = date.toLocaleString('es',{month : 'short'});
    dateYear.textContent = date.toLocaleString('es',{year: 'numeric'});    
}

//Funcion de Evento para agregar una nueva tareas

const agregarNuevaTarea = event => {
    event.preventDefault();
    const {value} = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    contenedorTareas.prepend(task);
    event.target.reset();
}

const changeTaskState = event => {
    event.target.classList.toggle('done');
}


//Funcion para ordenar la lista de tareas con el veneto ordenarBoton

const order = () => {
    const done = [];
    const toDo = [];
    contenedorTareas.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
    })
    return [...toDo, ...done];
}

const ordenarBoton = () => {
    order().forEach(el => contenedorTareas.appendChild(el))
}

//Llamado de la function setDate

setDate();



