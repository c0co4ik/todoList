export default class View {
	constructor(tasks) {
		tasks.forEach((el) => {
			this.renderTask(el)
		})
	}

	elements = {
		input: document.querySelector('#input'),
		form: document.querySelector('#form'),
		todoList: document.querySelector('#todoList')
	}

	renderTask(taskObj) {
		console.log(taskObj)
		const classCompleted = taskObj.status === 'done' ? 'completed' : '';
		const checked = taskObj.status === 'done' ? 'checked' : '';
		const layout = `<li class="todo-item " id="${taskObj.id}">
											<label class="todo-item-label">
												<input class="checkbox" type="checkbox" ${checked}/>
												<span class="${classCompleted}">${taskObj.name}</span>
												<button class="btn btn-secondary btn-sm">Удалить</button>
											</label>
										</li>`
		
		this.elements.todoList.insertAdjacentHTML('beforeend', layout);
	}
}