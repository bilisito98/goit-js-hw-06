let counterValue = 0;
const valueSpan = document.getElementById('value');
valueSpan.textContent = counterValue;

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
incrementButton.addEventListener('click', increment)
decrementButton.addEventListener('click', decrement)

function increment(){
    counterValue+=1;
    valueSpan.textContent = counterValue;
}
function decrement(){
    counterValue-=1;
    valueSpan.textContent = counterValue;
};