let helloBtn = document.querySelector('button');
helloBtn.addEventListener('click',inputMsg);

function inputMsg() {
    let name = prompt('Enter your name: ');
    helloBtn.textContent= 'Hello' + " " + name ;
}