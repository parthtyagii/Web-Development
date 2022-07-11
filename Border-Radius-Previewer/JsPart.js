//now...
let clickButton = document.querySelector("#CLICK");
clickButton.addEventListener('click', () => {

    const topLeft = document.querySelector("#tLeft").value;
    const topRight = document.querySelector("#tRight").value;
    const downLeft = document.querySelector("#dLeft").value;
    const downRight = document.querySelector("#dRight").value;

    document.querySelector("#box").style.borderTopLeftRadius = `${topLeft}%`;
    document.querySelector("#box").style.borderTopRightRadius = `${topRight}%`;
    document.querySelector("#box").style.borderBottomLeftRadius = `${downLeft}%`;
    document.querySelector("#box").style.borderBottomRightRadius = `${downRight}%`;

    let code = ` border-radius:`;
    if (topLeft > 0) {
        code = code + ` ${topLeft}%`;
    }
    else {
        code = code + ` 0`;
    }

    if (topRight > 0) {
        code = code + ` ${topRight}%`;
    }
    else {
        code = code + ` 0`;
    }

    if (downLeft > 0) {
        code = code + ` ${downLeft}%`;
    }
    else {
        code = code + ` 0`;
    }

    if (downRight > 0) {
        code = code + ` ${downRight}%`;
    }
    else {
        code = code + ` 0`;
    }
    code = code + `;`;
    console.log(code);
    document.querySelector("#clipboard").value = code;
});

let clipBoard = document.querySelector("#CLICK2");
clipBoard.addEventListener('click', () => {

    let clipBoardText = document.querySelector("#clipboard").value;
    navigator.clipboard.writeText(clipBoardText);
    alert("Copied to clipboard.");
});





