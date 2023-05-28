//задание 1

/*function message(){
    console.log('Я учу JavaScript');
}
message();*/

//Задание 2

const img = document.getElementById('img');

function addPrevImg(){
    console.log('addPrevImg');
    img.src = './image/1.jpg'
}

function addNextImg(){
    console.log('addNextImg');
    img.src = './image/2.jpg'
}