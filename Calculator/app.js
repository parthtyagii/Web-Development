let input_display = document.querySelector('#display');
//now
//..operator1
document.querySelector("#operator1 .interface:nth-of-type(1)").addEventListener('click', function () {
    input_display.innerText = 0;
})

document.querySelector("#operator1 .interface:nth-of-type(2)").addEventListener('click', function () {
    input_display.innerText = input_display.innerText.slice(0, input_display.innerText.length - 1);
})

document.querySelector("#operator1 .interface:nth-of-type(3)").addEventListener('click', function () {
    input_display.innerText += '/';
})

document.querySelector("#operator1 .interface:nth-of-type(4)").addEventListener('click', function () {
    input_display.innerText += '*';
})

//..operator2
document.querySelector("#operator2 .interface:nth-of-type(1)").addEventListener('click', function () {
    input_display.innerText += 1;
})

document.querySelector("#operator2 .interface:nth-of-type(2)").addEventListener('click', function () {
    input_display.innerText += 2;
})

document.querySelector("#operator2 .interface:nth-of-type(3)").addEventListener('click', function () {
    input_display.innerText += 3;
})

document.querySelector("#operator2 .interface:nth-of-type(4)").addEventListener('click', function () {
    input_display.innerText += '-';
})

//..operator3
document.querySelector("#operator3 .interface:nth-of-type(1)").addEventListener('click', function () {
    input_display.innerText += 4;
})

document.querySelector("#operator3 .interface:nth-of-type(2)").addEventListener('click', function () {
    input_display.innerText += 5;
})

document.querySelector("#operator3 .interface:nth-of-type(3)").addEventListener('click', function () {
    input_display.innerText += 6;
})

document.querySelector("#operator3 .interface:nth-of-type(4)").addEventListener('click', function () {
    input_display.innerText += '+';
})

//..operator4
document.querySelector("#operator4 .interface:nth-of-type(1)").addEventListener('click', function () {
    input_display.innerText += 7;
})

document.querySelector("#operator4 .interface:nth-of-type(2)").addEventListener('click', function () {
    input_display.innerText += 8;
})

document.querySelector("#operator4 .interface:nth-of-type(3)").addEventListener('click', function () {
    input_display.innerText += 9;
})

document.querySelector("#operator4 .interface:nth-of-type(4)").addEventListener('click', function () {
    let num = input_display.innerText;
    let d_count1 = 0;
    let d_count2 = 0;
    let o_count = 0;
    let idx = -1;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === '*') {
            o_count++;
            idx = i;
        }
        else if (num[i] === '/') {
            o_count++;
            idx = i;
        }
        else if (num[i] === '-') {
            o_count++;
            idx = i;
        }
        else if (num[i] === '+') {
            o_count++;
            idx = i;
        }
    }
    //now
    let num1 = parseInt(num.slice(0, idx));
    let num2 = parseInt(num.slice(idx + 1, num.length));
    if (num[idx] === '*') {
        input_display.innerText = num1 * num2;
    }
    else if (num[idx] === '/') {
        input_display.innerText = num1 / num2;
    }
    else if (num[idx] === '-') {
        input_display.innerText = num1 - num2;
    }
    else if (num[idx] === '+') {
        input_display.innerText = num1 + num2;
    }
})

//..operator5
document.querySelector("#operator5 .interface:nth-of-type(1)").addEventListener('click', function () {
    input_display.innerText += 0;
})






















