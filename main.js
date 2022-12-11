document.getElementById('downloadbtn').addEventListener('click', (a) =>{
    a.preventDefault();

    document.querySelector('.hidden').classList.replace('hidden', 'visible');

    var el = document.createElement('a');
    el.setAttribute('href', 'assets/');
    el.setAttribute('download', 'Resume-WilliamCalda.pdf');
    el.click();

})

let clickListener = 0;

document.getElementById("nxt").addEventListener('click', ()=>{
    const srcpath = 'assets/';
    
    const Pictures = [
        'pic-1.jpg',
        'pic-2.jpg',
        'pic-3.jpg',
        'pic-4.jpg',
        'pic-5.jpg',
        'pic-6.jpg',
        'pic-7.jpg'
    ]

    const Text = [
        'I have a hobby in Mural Painting and have been painting ever since Senior High School',
        'i have entered multiple Mural Painting Competitions over the years and have been improving my skills in it',
        'I also have painted Schools for the Lettering and Logos as well as multiple barangay outpost in our Barangay',
    ]

    clickListener = clickListener + 1 < Pictures.length ? clickListener + 1 : 0;

    document.getElementById('side-pic').setAttribute(
        'src', `${srcpath}${Pictures[clickListener]}`
    )

    let newElement = document.createElement('p');

    newElement.className = 'ntext';

    newElement.append(document.createTextNode(`${Text[clickListener]}`));

    document.getElementById('tobeExtended').appendChild(newElement);

    console.log(document.getElementById('tobeExtended'));
})
