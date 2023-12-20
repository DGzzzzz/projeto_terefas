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
        $('#nova-tarefa').val('');
    })
const Tabelaraiz = document.querySelector('ul');

Tabelaraiz.addEventListener('click', function(e) {
    if(e.target.classList.contains('checked')) {
        e.target.classList.remove('checked');
    } else {
        e.target.classList.add('checked');
    }
})

});     