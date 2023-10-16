let count = 0;
let myExercises = [];

function handleOnLoad() {
    myExercises = JSON.parse(localStorage.getItem('myExercises')) || [];
    if(!myExercises){myExercises = []}

    myExercises.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });

    let html = `
    <link href="index.css" rel="stylesheet">
    <header class="masthead">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 text-center">
                    <h1 class="fw-light", style="color: white";><b></b></h1>
                </div>
            </div>
        </div>
    </header>
    <h4 style="color: crimson"><u>Exercises</u></h4>
    <table id="AllExercises" class="table table-striped table-hover table-sm" cellspacing="0" width="100%">
    <tr>
      <th scope="col">Exercise</th>
      <th scope="col">Distance in Miles</th>
      <th scope"col">Date Completed</th>
      <th scope"col">Pin</th>
      <th scope"col">Delete</th>
    </tr>`;

    myExercises.forEach(function (exercise, index) {

        if (exercise.exercise == undefined) {
            exercise.exercise = 0;
        }

        const pinText = exercise.pinVar ? 'Unpin' : 'Pin';
        const pinClass = exercise.pinVar ? 'pinned' : '';

        if (exercise.pinVar) {
            exercise.pinvar = false;
        }

        html += `
         <tr id="exercise-row-${index}">
             <td>${exercise.exercise}</td>
             <td>${exercise.distance}</td>
             <td>${exercise.date}</td>
             <td><button type="button" class="btn btn-outline-success pin-button, ${pinClass}" onclick="handleExercisePin(${index})">${pinText}</button></td>
             <td><button type="button" class="btn btn-danger" onclick="handleExerciseDelete(${index})">Delete</button></td>
        </tr>`;

    })
    html += `
    <table>
    <form onsubmit="return false">
        <h4 style="color: crimson"><u>Add an Exercise</u></h4>
        <div class="form-group">
            <label for="exercise">Exercise:</label><br>
            <input type="text" id="exercise" name="exercise">
        </div>
        <div class="form-group", >
            <label for="distance">Distance in Miles:</label><br>
            <input type="text" id="distance" name="distance">
        </div>
        <div class="form-group">
            <label for="date">Date:</label><br>
            <input type="date" id="date" name="date">
        </div>
        <button type="button" class="btn btn-primary" onclick="handleExerciseAdd()">Submit</button>
    </form>`

    document.getElementById("app").innerHTML = html;

    const btnEl = document.querySelector('.btn');

    btnEl.addEventListener('click', () => {
    btnEl.classList.add('special');

});
}


$(document).ready(function () {
    $('#AllExercises').DataTable({
        "order": [
            [3, "desc"]
        ],
        "columnDefs": [
            {
                "type": "date",
                "targets": 2,
                "render": function (data, type, row) {
                    return new Date(data).getTime();
                }
            }
        ],
    });
    $('.dataTables_length').addClass('bs-select');
  });


function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
  
console.log(uuidv4());

function handleOnClick() {
    count++;
    document.getElementById("body").innerHTML = count;
    localStorage.setItem('myExercises', JSON.stringify(myExercises));
    let updatedArray = JSON.parse(localStorage.getItem('myExercises'));
}


function handleExerciseDelete(index) {
    myExercises.splice(index, 1);
    localStorage.setItem('myExercises', JSON.stringify(myExercises));
    handleOnLoad(); 
}


function handleExerciseAdd() {
    let exercise = document.getElementById('exercise').value;
    let distance = document.getElementById('distance').value;
    let date = document.getElementById('date').value;
    let pinVar = false;
    let id = uuidv4();

    myExercises.push({
        id: id,
        exercise: exercise,
        distance: distance,
        date: date,
        pinVar: pinVar,
    });

    localStorage.setItem('myExercises', JSON.stringify(myExercises));

    handleOnLoad();
}


function handleExercisePin(index) {
    const exerciseRow = document.getElementById(`exercise-row-${index}`);
    const pinButton = exerciseRow.querySelector('.pin-button');
    const exercise = myExercises[index];

    if (exercise.pinned) {
        exercise.pinned = false;
        exercise.pinVar = false;
        localStorage.removeItem(`pinned-${index}`);
    } else {
        exercise.pinned = true;
        exercise.pinVar = true;
        localStorage.setItem(`pinned-${index}`, true);
    }

    localStorage.setItem('myExercises', JSON.stringify(myExercises));
    console.log('Updated myExercises:', myExercises);

    handleOnLoad();
}