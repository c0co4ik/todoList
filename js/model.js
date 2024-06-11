export default class Model{
	constructor() {
		this.tasks = [];
		this.loadFromLocalStorage();
	}
	
	// Метод для загрузки локальных данных из localStorage
	loadFromLocalStorage() {
		const data = localStorage.getItem('tasks');
		if(data) {
			this.tasks = JSON.parse(data)
		}
	}

	// Метод для сохранения локальных данных
	saveToLocalStorage() {
		localStorage.setItem('tasks', JSON.stringify(this.tasks))
	}

	// Создаем задачу
	addTask(nameTask) {
		// Создаем id для задачи так, что бы оно не повторялось т.е было уникальным
		let id = 1;
		if(this.tasks.length >= 1) {
			id = this.tasks[this.tasks.length - 1].id + 1;
		}

		// Создаем объект с задачей
		const newTask = {
			name: nameTask,
			id: id,
			status: 'active'
		}
		this.tasks.push(newTask)
		this.saveToLocalStorage();
		return newTask;
	}

	// Редактирование статуса задачи
	editStatus(id) {
		const currentItem = this.tasks.find(function(item) {
			return item.id == id;
		});
		if(currentItem.status == 'active') {
			currentItem.status = 'done'
		} else {
			currentItem.status = 'active'
		}
		this.saveToLocalStorage();
		return currentItem
	}
}