let btn = document.querySelector('#btn');
let color = document.querySelector('#color');
//now
btn.addEventListener('click', function () {
    let r = Math.floor((Math.random() * 255)) + 1;
    let g = Math.floor((Math.random() * 255)) + 1;
    let b = Math.floor((Math.random() * 255)) + 1;
    color.innerText = `rgb(${r},${g}, ${b})`;
    document.querySelector('body').style.backgroundColor = `rgb(${r},${g}, ${b})`;
    console.log(color.innerText);
})








