//задание 1

/*function message(){
    console.log('Я учу JavaScript');
}
message();*/

//Задание 2

/*const img = document.getElementById('img');

function addPrevImg(){
    console.log('addPrevImg');
    img.src = './image/1.jpg'
}

function addNextImg(){
    console.log('addNextImg');
    img.src = './image/2.jpg'
}*/

//задание под *
let year = 2023;
function isLeapYears(year) {
    if(year % 4 ===0){
    if(year % 100 ===0){
    if(year % 400 ===0){
    return true;
    }else{
        return false;
    }
    }else{
        return true;
    }
    }else{
        return false;
    }
}

isLeapYears();