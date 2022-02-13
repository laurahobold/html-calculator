let a = '';
let b = '';
let opperation = false;
let op = '';
let result = 0;

function addNumberA(number) {
    if (opperation) {
        b = b + number;
        result = b;
    }
    else {
        a = a + number;
        result = a;
    }
    document.getElementById('result').innerHTML = result;
}
function selectOpperation(value, id) {
    op = value;
    opperation = true;
    resetOpperation();
    switch (id) {
        case 1:
            document.getElementById(1).style.backgroundColor = '#AB84C2';
            document.getElementById(1).style.color = '#eddff5';
            break;
        case 2:
            document.getElementById(2).style.backgroundColor = '#AB84C2';
            document.getElementById(2).style.color = '#eddff5';
            break;
        case 3:
            document.getElementById(3).style.backgroundColor = '#AB84C2';
            document.getElementById(3).style.color = '#eddff5';
            break;
        case 4:
            document.getElementById(4).style.backgroundColor = '#AB84C2';
            document.getElementById(4).style.color = '#eddff5';
            break;
    }


    document.getElementById('result').innerHTML = result;
}
function getResult() {
    switch (op) {
        case '/':
            result = Number.parseInt(a) / Number.parseInt(b);
            break;
        case 'x':
            result = Number.parseInt(a) * Number.parseInt(b);
            break;
        case '+':
            result = Number.parseInt(a) + Number.parseInt(b);
            break;
        case '-':
            result = Number.parseInt(a) - Number.parseInt(b);
            break;

    }
    console.log(result, a, b, opperation, op);
    document.getElementById('result').innerHTML = result;
    a = '';
    op = '';
    b = '';
    result = '';
    resetOpperation();
}
function allClear() {
    document.getElementById('result').innerHTML = '0';
    a = '';
    op = '';
    b = '';
    result = '';
    opperation = false;
    resetOpperation();
}
function lastDelete() {
    console.log(opperation, a, b, op, result);
    if (opperation) {
        if (b === '') {
            op = '';
            opperation = false;
            document.getElementById('result').innerHTML = a;
            resetOpperation();
        } else {
            if (b.length === 1) {
                document.getElementById('result').innerHTML = '0';
                b = '';
            } else {
                b = b.substring(0, b.length - 1);
                document.getElementById('result').innerHTML = b;
            }
        }
    } else {
        if (a.length === 1) {
            document.getElementById('result').innerHTML = '0';
            a = '';
        } else {
            a = a.substring(0, a.length - 1);
            document.getElementById('result').innerHTML = a;
        }
    }
}
function resetOpperation (){
    for (let i = 1; i <= 4; i++) {
        document.getElementById(i).style.backgroundColor = '#eddff5';
        document.getElementById(i).style.color = '#AB84C2'; 
    }
}