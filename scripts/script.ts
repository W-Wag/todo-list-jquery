import $ from 'jquery';

$('.label-task').on('click', function() {
  $('.task').show()
  $('.label-button').removeClass('label-button')
  $('.label-task').text('Tarefa a ser criada:')
  $('.first-task-paragraph').hide()
})
