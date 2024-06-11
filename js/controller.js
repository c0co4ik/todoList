import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.tasks);

// Вешаем обработчик событий на форму.
view.elements.form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Добавление задачи
	const nameTask = view.elements.input.value.trim();

	// Проверка на пустую строку
	if(!nameTask) {
		alert('Введена пустая строка')
	} else {
		view.renderTask(model.addTask(nameTask));
		view.clearInput();
	}
})

// Редактирование задач
view.elements.todoList.addEventListener('click', (e) => {
	// Без этого условия по одному клику срабатывало 2 события. Label и checkbox внутри Label, что не давало поменять статус задачи
	if(e.target.classList.contains('todo-item-label')) {
		const itemId = e.target.closest('.todo-item').getAttribute('data-id');
		view.changeStatus(model.editStatus(itemId));
	}

})
