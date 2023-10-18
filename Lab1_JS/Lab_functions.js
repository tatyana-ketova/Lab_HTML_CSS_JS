//Problem 1

function sleepingin(){


const input10 = document.getElementById('input-10'); // Извлекаем элемент input
const weekday = input10.value;
const input11 = document.getElementById('input-11'); // Извлекаем элемент input
const vacation = input11.value;




 if (weekday===true||vacation===true) {
   result=true;
  }
 else {result=false;}

 alert(result);
}

const button1 = document.querySelector('#problem1');
if (button1.onclick===true) {abc()}
function abc(){
  alert('waw')
}
