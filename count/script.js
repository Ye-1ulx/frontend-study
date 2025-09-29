const counter = document.querySelector('p');
const up = document.querySelector('.up');
const down = document.querySelector('.down');

let count = 0;

up.addEventListener('click',function(){
    count += 1;
    counter.innerText = count;
})

down.addEventListener('click',function(){
    count += -1;
    counter.innerText = count;
})