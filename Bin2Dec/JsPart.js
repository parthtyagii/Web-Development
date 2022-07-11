// check function tells if the string is binary or not.
const check = (binary_num) => {
    for (let i = 0; i < binary_num.length; i++) {
        if (binary_num[i] != '1' && binary_num[i] != '0') {
            return false;
        }
    }
    return true;
}

//now...
const calculator = document.querySelector("button");

calculator.addEventListener('click', () => {

    const user_input = document.querySelector("#binary").value;

    if (check(user_input)) {
        if (user_input.length >= 1) {
            let ans = 0;
            let p = 1;
            if (user_input[user_input.length - 1] == '1') {
                ans = 1;
            }
            //now
            for (let i = user_input.length - 2; i >= 0; i--) {
                p = p * 2;
                if (user_input[i] == '1') {
                    ans = ans + p;
                }
            }
            document.querySelector("#decimal").value = ans;
        }
        else {
            document.querySelector("#decimal").value = "";
        }

    }
    else {
        alert("Please check your input ( 0's & 1's only ).");
        document.querySelector("#binary").value = "";
        document.querySelector("#decimal").value = "";
    }
})