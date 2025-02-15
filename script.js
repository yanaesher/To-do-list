let inputBox = document.getElementById('todo-app-input-box');
let listContainer = document.getElementById('list-container');
let addButton = document.getElementById('addButton');


addButton.addEventListener('click', addTask);


function addTask() {
	if (inputBox.value === '') {
		alert('You must write task!');
	}
	else {
		let li = document.createElement('li');
		li.classList.add('todo-app__list-container-item');
		li.textContent = inputBox.value;
		listContainer.append(li);
	}
}




