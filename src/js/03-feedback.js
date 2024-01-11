import _throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let dataForm={}

formLoad()

form.addEventListener('input', _throttle(saveForm, 500));

form.addEventListener('submit', onSubmit);

function saveForm(evt){
	dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY))|| {};
	dataForm[evt.target.name] = evt.target.value;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm))
}

function formLoad() {
	let loadForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
	if (!loadForm) {
		return;
	}

	dataForm = loadForm;
	form.email.value = dataForm.email || '';
	form.message.value = dataForm.message || '';
}


function onSubmit(event) {
	event.preventDefault()

	if (!event.target.email.value || !event.target.message.value) {
		alert('Enter data');
		return;
	}

	event.target.reset();
	console.log(dataForm);
	localStorage.removeItem(STORAGE_KEY);
}

