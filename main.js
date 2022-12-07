document.getElementById('downloadbtn').addEventListener('click', (param1) =>{
    param1.preventDefault();
    document.querySelector('.hidden').classList.toggle('visible');
})