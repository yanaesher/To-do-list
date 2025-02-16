let inputBox = document.getElementById('todo-app-input-box');
let listContainer = document.getElementById('list-container');
let addButton = document.getElementById('addButton');


addButton.addEventListener('click', addTask);
window.addEventListener('DOMContentLoaded', showTask);


function addTask() {
	if (inputBox.value.trim() === '') {
		alert('You must write task!');
		return;
	}
	let li = document.createElement('li');
	let span = document.createElement('span');
	li.classList.add('todo-app__list-container-item');
	li.textContent = inputBox.value;
	listContainer.append(li);
	span.innerHTML = '\u00d7';
	li.append(span);
	inputBox.value = '';
	saveData();
}



listContainer.addEventListener('click', (e) => {
	let target = e.target;
	if (target.tagName === 'LI') {
		target.classList.toggle('checked');
		saveData();
	}
	else if (target.tagName === 'SPAN') {
		target.parentElement.remove();
		saveData();
	}
});

function saveData() {
	localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem('data');
}

