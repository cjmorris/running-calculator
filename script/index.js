const siteLogo = document.getElementById('site-logo');
siteLogo.addEventListener('click', navigateHome);

function navigateHome(){
    location.href = 'index.html';
}