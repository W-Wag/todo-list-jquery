import $ from 'jquery';
import { generateDate } from './utils/generateDateFunction';

$('.create-list').on('submit', function(e) {
  e.preventDefault()
  const newTask = $('#task-input').val()
  $('.task-table').show()
  $('.finished-task').hide()
 $('.task-list').append(`
  <tr>
   <td class="task-name"> ${newTask} </td> 
   <td> em curso </td> 
   <td> ${generateDate(new Date())} </td> 
   <td class="finished-task finished-task-content"></td> 
   <td style="width: 40px;">
    <button type="button" class="edit">
      <img loading="lazy" width="25px" height="25px" src="./assets/edit-icon.svg" alt="O ícone para você editar sua tarefa">
    </button>
   </td> 
   <td style="width: 40px;"> 
      <button>
        <img loading="lazy" width="25px" height="25px" src="./assets/delete-icon.svg" alt="O ícone para você deletar sua tarefa">
    </button> 
 </td> 

   </tr>
 `)
})


$('.label-task').on('click', function() {
  $('.task').show()
  $('.label-button').removeClass('label-button')
  $('.label-task').text('Tarefa a ser criada:')
  $('.first-task-paragraph').hide()
})

$('button').on('click', function () {
  console.log($(this).parents())
})
