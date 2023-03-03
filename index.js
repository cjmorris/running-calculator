if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

function ready(){
    var siteLogo = document.getElementsByClassName('site-logo')[0]
    siteLogo.addEventListener('click', navigateHome)
}

function navigateHome(){
    location.href = 'index.html';
}