//Problem 1

function sleepingin(weekday,vacation){

 if (weekday===false||vacation===true) {
   result=true;
  }
 else {result=false;}

 console.log(result);
}
sleepingin(false,false)
sleepingin(true,false)
sleepingin(false,true)
//Problem 2
function monkeyTrouble(aSmile,bSmile){
  if ((aSmile===false && bSmile===false)||(aSmile===true && bSmile===true)){
    trouble=true;
  }
  else{
    trouble=false;
  }
  return console.log(trouble)
}
monkeyTrouble(true,true)
monkeyTrouble(false,false)
monkeyTrouble(true,false)

//Problem 3

function stringTimes(str,num) {
  new_str='';
  while (num>0){
     new_str+=str;
     num-=1;
  }

  return console.log(new_str);
}
stringTimes('Hi',2)
stringTimes('Hi',3)
stringTimes('Hi',1)

//Problem 4
function luckySum(a,b,c){
  let result=a+b+c;
  if (c===13) {
    result=0;

  }
  if (b===13) {
    result=a;
  }
  if (c===13) {
    result=b+a;
  }

  return console.log(result)
}
luckySum(1,2,3)
luckySum(1,2,13)
luckySum(1,13,3)

//Problem 5
function caught_speeding(speed,is_birthday){
  let result;
  if (is_birthday===true)
  {speed-=5;}

  if (speed<=60){
    result=0;
  }
  if (speed<=80 && speed>60){
    result=1;
  }
  if (speed>80){
    result=2;
  }
  return console.log(result)


}
caught_speeding(60,false)
caught_speeding(65,false)
caught_speeding(65,true)
