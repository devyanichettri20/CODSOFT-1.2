let cal = document.getElementById('cal');
buttons = document.querySelectorAll('button');
let calValue = '';
for (item of buttons) 
 {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if (buttonText == 'x') 
        {
            buttonText = '*';
            calValue += buttonText;
            cal.value = calValue;
        }
        else if (buttonText == 'C') 
        {
            calValue = "";
            cal.value = calValue;
        }
        else if (buttonText == '=') 
        {
            cal.value = eval(calValue);
        }
        else 
        {
            calValue += buttonText;
            cal.value = calValue;
        }

    })
}

