import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View();

// Вешаем обработчик событий на форму.
view.elements.form.addEventListener('submit', (e) => {
	e.preventDefault();
	const nameTask = view.elements.input.value.trim();
	// Проверка на пустую строку
	if(!nameTask) {
		alert('Введена пустая строка')
	} else {
		model.addTask(nameTask);
	}
})
