let headerBlock = document.getElementsByClassName('header-brand')[0];

window.addEventListener('scroll', function() {
    if(window.pageYOffset>0){
        headerBlock.classList.add('dropShadow');
    }else{
        headerBlock.classList.remove('dropShadow');
    }
});

const masterBlocks = document.querySelectorAll('.master-cards-wrapper');

masterBlocks.forEach(function (block) {
    let buttons = block.querySelectorAll('button.card-list-item-quickwrite-date');
    buttons.forEach(function (button) {
        button.addEventListener('click', function(event){
            let timeline = block.querySelector('.card-list-item-quickwrite-time');
            if(timeline.classList.contains('qw')){
                timeline.classList.remove('qw');
            }
            else {
                timeline.classList.add('qw');
            }
        })
    })
});

let profileBar = document.getElementsByClassName('profile-bar')[0];

window.addEventListener('scroll', function() {
    if(window.pageYOffset>0){
        profileBar.classList.add('dropShadow');
    }else{
        profileBar.classList.remove('dropShadow');
    }
});


//анимация капля для нижнего меню
(function($) {
  //ripple-effect
  var parent, ink, d, x, y;
  $(".ripple").click(function(e){
    parent = $(this).parent();
 
    //создаём .ink элемент, если еще не создан
    if (parent.find(".ink").length == 0)
      parent.prepend("<span class='ink'></span>");
 
    ink = parent.find(".ink");
    //сбрасываем анимацию
    ink.removeClass("animate");
 
    //рассчитываем размеры .ink элемента
    //они определяются размерами родительского контейнера
    if(!ink.height() && !ink.width())
    {
       d = Math.max(parent.outerWidth(), parent.outerHeight());
       ink.css({height: d, width: d});
    }
 
    //установим координаты и запустим анимацию
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
  }) 
})(jQuery);