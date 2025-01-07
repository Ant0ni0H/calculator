const onOff = document.getElementById('on-off')

const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operations');

const screen = document.querySelector('.text-screen');

const equal = document.getElementById('equal');

const cancel = document.getElementById('cancel');


let onOffNumber = false;


onOff.addEventListener('click', ()=> {

    onOffNumber = !onOffNumber;
    if (onOffNumber) {
        onOff.style.backgroundColor = 'green';
        screen.innerText = 'On!';

        setTimeout(()=> {

            screen.innerText = '';

        }, 1000)
    }


    else {

        onOff.style.backgroundColor = 'red';
        screen.innerText = 'Off';

    }
})



numbers.forEach(number => {
    number.addEventListener('click', ()=> {
        if (onOffNumber) {
            screen.innerText += number.innerText;
        }
    })
})

operations.forEach(operation => {
    operation.addEventListener('click', ()=> {
        if (onOffNumber) {
            screen.innerText += operation.innerText;
        }
        
    })
})


cancel.addEventListener('click', ()=> {

    screen.innerText = '';

})


equal.addEventListener('click', ()=> {
    try {

        const result = math.evaluate(screen.innerText);
        screen.innerText = result.toString();
    } catch (error) {
        screen.innerText = 'error';
        screen.innerText = '';
    }
})






