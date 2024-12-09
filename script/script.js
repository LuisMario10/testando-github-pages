const body = document.body;
const button = document.querySelector('#button-change-theme');

button.addEventListener("click", () => {
    
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')) button.innerHTML = '&#x2600;'
    else button.innerHTML = '&#x1F319;'
});
