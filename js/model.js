export default class Model{
	constructor() {
		this.tasks = [];
		this.achievements = [
			{name: 'Мастер организации', completed: false, condition: 'Завершите 10 задач за один день.'},
			{name: 'Концентрация', completed: false, condition: 'Завершите все задачи в определенной категории.'},
			{name: 'Стратегический планировщик', completed: false, condition: 'Создайте и завершите план на неделю вперед.'},
			{name: 'Награда за стабильность', completed: false, condition: 'Завершите задачу каждый день в течение недели.'},
			{name: 'Мастер приоритетов', completed: false, condition: 'Отметьте все задачи срочности и важности.'},
			{name: 'Утренний ритуал', completed: false, condition: 'Создайте список дел на следующий день перед сном.'},
			{name: 'Коллекционер целей', completed: false, condition: 'Добавьте 50 задач в свой список за один день.'},
			{name: 'Чистый лист', completed: false, condition: 'Очистите весь список задач и начните с чистого листа.'},
		]
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

	// Находим задачу по ее id
	findCurrentItem(id) {
		const currentItem = this.tasks.find(function(item) {
			return item.id == id;
		});
		return currentItem;
	}

	// Редактирование статуса задачи
	editStatus(id) {
		const currentItem = this.findCurrentItem(id);
		if(currentItem.status == 'active') {
			currentItem.status = 'done'
		} else {
			currentItem.status = 'active'
		}
		this.saveToLocalStorage();
		return currentItem
	}

	// Удаление задачи
	taskDelete(id) {
		const indexCurrentItem = this.tasks.findIndex(item => item.id == id);
		if(indexCurrentItem !== -1) {
			this.tasks.splice(indexCurrentItem, 1)
		}
		this.saveToLocalStorage();
	}
}