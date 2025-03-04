let buttons = document.querySelectorAll('button');
let input = document.getElementById("input");

let str = '';

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText == '=') {
            try {
                str = eval(str).toString();
                input.value = str;
            } catch (error) {
                input.value = "Error";
                str = '';
            }
        } else if (buttonText == 'AC') {
            str = '';
            input.value = '';
        } else if (buttonText == 'DEL') {
            str = str.substring(0, str.length - 1);
            input.value = str;
        } else {
            str += buttonText;
            input.value = str;
        }
    });
});
