document.getElementById('downloadbtn').addEventListener('click', (a) =>{
    a.preventDefault();

    document.querySelector('.hidden').classList.replace('hidden', 'visible');

    var el = document.createElement('a');
    el.setAttribute('href', 'assets/');
    el.setAttribute('download', 'Resume-WilliamCalda.pdf');
    el.click();

})