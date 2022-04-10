var a = document.getElementById("device_list");
var b = document.getElementById("stream_list");
var c = document.getElementById("download_list");

function deviceDropDown(){
var devNum = a.value;
var strNum = b.value;
var dowNum = c.value;
console.log(devNum, strNum, dowNum);

var mbpsTotal = Number(devNum) + Number(strNum);
var capTotal = dowNum;

document.getElementById("display").innerHTML = 'Based on your selection, you should consider at least ' + mbpsTotal + 'mbps. Additionally, you should look for a data cap that is no less than ' +capTotal + '.'
}


