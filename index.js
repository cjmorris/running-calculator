var siteLogo = document.getElementsByClassName('site-logo')[0]
siteLogo.addEventListener('click', navigateHome)


function navigateHome(){
    location.href = 'index.html';
}