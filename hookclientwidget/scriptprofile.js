let profileBar = document.getElementsByClassName('profile-bar')[0];


window.addEventListener('scroll', function() {
    if(window.pageYOffset>450){
        profileBar.classList.add('dropShadow');
    }else{
        profileBar.classList.remove('dropShadow');
    }
});
