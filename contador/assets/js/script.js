const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const value = document.getElementById("count");
const resetButton = document.getElementById("reset");

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

increment.addEventListener('mousedown', () =>{
    intervalId = setInterval(() =>{
        count+=1;
        updateValue();
    }, 100);

});
decrement.addEventListener('mousedown', () =>{
    intervalId = setInterval(() =>{
        count-=1;
        updateValue();
    }, 100);

});
resetButton.addEventListener('click', () =>{
        count = 0;
        updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalId));