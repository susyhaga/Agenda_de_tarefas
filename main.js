$(document).ready(function(){


    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#limpar').click(function(){
        $('form').slideUp();
        $('li').remove();
    })
    $('#botao-remover').click(function(){ 
        $('li').remove('li:last')
    })
    $('form').on('submit', function(e){
        e.preventDefault(e);
        const inputNovaTarefa= $('#nova-tarefa').val();
        const novoItem=$('<li></li>');
        $(`

        <div class="line-through">
            <p> ${inputNovaTarefa}</p>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
    })

    $('ul').on("click","li", function(){ 
        $(this).css({'text-decoration': 'line-through','color':'red'});
    })

})

