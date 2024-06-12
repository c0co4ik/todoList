export default class View {
	constructor(tasks) {
		tasks.forEach((el) => {
			this.renderTask(el)
		})
	}

	elements = {
		input: document.querySelector('#input'),
		form: document.querySelector('#form'),
		todoList: document.querySelector('#todoList'),
		searchTask: document.querySelector('#taskInput')
	}

	// Рендер задачи
	renderTask(taskObj) {
		const classCompleted = taskObj.status === 'done' ? 'completed' : '';
		const checked = taskObj.status === 'done' ? 'checked' : '';
		const layout = `<li class="todo-item " data-id="${taskObj.id}">
											<label class="todo-item-label">
												<input class="checkbox" type="checkbox" ${checked}/>
												<span class="${classCompleted}">${taskObj.name}</span>
												<button class="btn btn-secondary btn-sm" data-delete>Удалить</button>
											</label>
										</li>`
		
		this.elements.todoList.insertAdjacentHTML('beforeend', layout);
	}

	// Очистка инпута и фокус
	clearInput() {
		this.elements.input.value = '';
		this.elements.input.focus();
	}

	// Изменение статуса задачи 
	changeStatus(taskObj) {
		const currentItem = this.elements.todoList.querySelector(`[data-id="${taskObj.id}"]`)
		const currentItemText = currentItem.querySelector('span');

		if(taskObj.status == 'done') {
			currentItemText.classList.add('completed');
		} else {
			currentItemText.classList.remove('completed');
		}
	}
	// Удаление задачи
	deleteTask(id) {
		const currentItem = this.elements.todoList.querySelector(`[data-id="${id}"]`)
		currentItem.remove();
	}
}