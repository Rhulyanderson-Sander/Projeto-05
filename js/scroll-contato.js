$(function(){

    var directory = 'http://rhulyanderson-sander.github.io/Projeto-05/'

    $('[goto=contato]').click(function(){
        location.href=directory+'index.html?contato';
        return false;
    })

    checkUrl();
    function checkUrl(){
        var url = location.href.split('/');
        var curPage = url[url.length-1].split('?');

        if(curPage[1] != undefined && curPage[1] == 'contato'){
            $('html,body').animate({'scrollTop':$('#contato').offset().top});
        }    
    }
})