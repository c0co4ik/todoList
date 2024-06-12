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

// Редактирование задач и удаление
view.elements.todoList.addEventListener('click', (e) => {
	// Без этого условия по одному клику срабатывало 2 события. Label и checkbox внутри Label, что не давало поменять статус задачи
	// Редактирование
	if(e.target.classList.contains('todo-item-label')) {
		const itemId = e.target.closest('.todo-item').getAttribute('data-id');
		view.changeStatus(model.editStatus(itemId));
		// Удаление
	} else if(e.target.hasAttribute('data-delete')) {
		const itemId = e.target.closest('.todo-item').getAttribute('data-id');
		model.taskDelete(itemId)
		view.deleteTask(itemId)
	}
	// Если выше я выношу константу itemId что бы не повторять ее 2 раза, то получаю ошибку если клик происходит между li.

})

// Поиск задачи
view.elements.searchTask.addEventListener('keyup', (e) => {
	const searchedText = e.target.value.toLowerCase();
	view.elements.todoList.querySelectorAll('.todo-item').forEach((el) => {
		const itemText = el.querySelector('span').lastChild.data.toLowerCase();
		if(itemText.indexOf(searchedText) != -1) {
			el.style.display = 'block'
		} else {
			el.style.display = 'none'
		}
	})
	
})
