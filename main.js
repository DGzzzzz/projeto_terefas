$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#nova-tarefa').val();
    const novaLinha = $('<li></li>');
        $(`<li> ${novaTarefa} </li>`).appendTo(novaLinha);
        $(novaLinha).appendTo('ul');
    })    
})        