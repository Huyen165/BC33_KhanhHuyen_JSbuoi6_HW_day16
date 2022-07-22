function BT1() {
    var num = 0;
    var sum = 0;
    while (sum < 10000) {
        num++;
        sum += num;
    }
    document.getElementById("resultBT1").innerHTML = num;
}

// Bài 2 
function BT2() {
    var x = document.getElementById("x").value * 1;
    var n = document.getElementById("n").value * 1;
    var power = 1;
    var sumOfValue = 0;

    for (var i = 1; i <= n; i++) {
        power *= x;
        sumOfValue += power;
    }
    document.getElementById("resultBT2").innerHTML = sumOfValue

}

// Bài tập 3 

function BT3() {
    var txtNum = document.getElementById("txtNum").value * 1
    var temp = 1;
    var factorial = 1;
    while (temp <= txtNum) {
        factorial *= temp;
        temp++;
    }
    document.getElementById("resultBT3").innerHTML = factorial
}

// Bài tập 4 
function BT4() {
    var changeColor = document.getElementsByName("order")
    for (var i = 0; i < 10; i++) {

        if ((i + 1) % 2 == 0) {
            changeColor[i].style.background = "red";
        } else {
            changeColor[i].style.background = "blue";
        }
    }

}