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
		const newTask = model.addTask(nameTask);
		view.renderTask(newTask);
		view.elements.input.value = '';
		view.elements.input.focus();
	}
})
