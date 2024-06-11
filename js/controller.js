import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View();

// Добавляем задачу в список
function addTaskInModelAndView() {
	const nameTask = view.elements.input.value.trim();
	// Проверка на пустую строку
	if(!nameTask) {
		alert('Введена пустая строка')
	} else {
		const newTask = model.addTask(nameTask);
		view.renderTask(newTask);
	}
}

// Вешаем обработчик событий на форму.
view.elements.form.addEventListener('submit', (e) => {
	e.preventDefault();
	addTaskInModelAndView();
})
