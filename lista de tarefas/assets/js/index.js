const formTarefa = document.querySelector('#form-tarefa');
const inputTarefa = document.querySelector('#input-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

formTarefa.addEventListener('submit', (event) => {
  event.preventDefault();
  const textoTarefa = inputTarefa.value;
  
  if (textoTarefa.trim() !== '') {

    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = textoTarefa;
    listaTarefas.appendChild(novaTarefa);
    inputTarefa.value = '';
  
    }

});