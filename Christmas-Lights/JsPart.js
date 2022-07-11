let Lights = (delay = 0) => {
    circle1.style.opacity = 1;
    circle1.style.boxShadow = "30px 0 90px violet, -30px 0 90px violet, 0 30px 90px violet, 0 -30px 90px violet";

    setTimeout(() => {
        circle1.style.opacity = .5;
        circle1.style.boxShadow = "0 0 0 0";

        circle2.style.opacity = 1;
        circle2.style.boxShadow = "30px 0 90px indigo, -30px 0 90px indigo, 0 30px 90px indigo, 0 -30px 90px indigo";

        setTimeout(() => {
            circle2.style.opacity = .5;
            circle2.style.boxShadow = "0 0 0 0";

            circle3.style.opacity = 1;
            circle3.style.boxShadow = "30px 0 90px blue, -30px 0 90px blue, 0 30px 90px blue, 0 -30px 90px blue";
            setTimeout(() => {
                circle3.style.opacity = .5;
                circle3.style.boxShadow = "0 0 0 0";

                circle4.style.opacity = 1;
                circle4.style.boxShadow = "30px 0 90px green, -30px 0 90px green, 0 30px 90px green, 0 -30px 90px green";

                setTimeout(() => {
                    circle4.style.opacity = .5;
                    circle4.style.boxShadow = "0 0 0 0";

                    circle5.style.opacity = 1;
                    circle5.style.boxShadow = "30px 0 90px yellow, -30px 0 90px yellow, 0 30px 90px yellow, 0 -30px 90px yellow";

                    setTimeout(() => {
                        circle5.style.opacity = .5;
                        circle5.style.boxShadow = "0 0 0 0";

                        circle6.style.opacity = 1;
                        circle6.style.boxShadow = "30px 0 90px orange, -30px 0 90px orange, 0 30px 90px orange, 0 -30px 90px orange";

                        setTimeout(() => {
                            circle6.style.opacity = .5;
                            circle6.style.boxShadow = "0 0 0 0";

                            circle7.style.opacity = 1;
                            circle7.style.boxShadow = "30px 0 90px red, -30px 0 90px red, 0 30px 90px red, 0 -30px 90px red";

                            setTimeout(() => {
                                circle7.style.opacity = .5;
                                circle7.style.boxShadow = "0 0 0 0";

                            }, delay);
                        }, delay);
                    }, delay);
                }, delay);
            }, delay);
        }, delay);
    }, delay);
};
// ---------------------------------------------------------------------------------------------------------------

//now...
let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");
let circle3 = document.querySelector("#circle3");
let circle4 = document.querySelector("#circle4");
let circle5 = document.querySelector("#circle5");
let circle6 = document.querySelector("#circle6");
let circle7 = document.querySelector("#circle7");

//now...
let start = document.querySelector("#start");
start.addEventListener('click', () => {

    let delay = document.querySelector('#interval').value;

    if (delay >= 1000 && delay <= 10000) {
        Lights(delay);
    }
});

let Stop = document.querySelector('#stop');
Stop.addEventListener('click', () => {

    circle1.style.opacity = "50%";
    circle1.style.boxShadow = "0 0 0 0";

    circle2.style.opacity = "50%";
    circle2.style.boxShadow = "0 0 0 0";

    circle3.style.opacity = "50%";
    circle3.style.boxShadow = "0 0 0 0";

    circle4.style.opacity = "50%";
    circle4.style.boxShadow = "0 0 0 0";

    circle5.style.opacity = "50%";
    circle5.style.boxShadow = "0 0 0 0";

    circle6.style.opacity = "50%";
    circle6.style.boxShadow = "0 0 0 0";

    circle7.style.opacity = "50%";
    circle7.style.boxShadow = "0 0 0 0";
});
