 let milliS = 0;
 let second = 0;
 let minute = 0;
 let Hr = 0;

 let timer = false;
 
 function Start(){
     timer = true;
     Myfun();
 }

 function Stop(){
    timer = false;
    Myfun();
 }
 function Reset(){
    location.reload();
 }

 function Myfun(){
     if(timer == true){
        milliS = milliS + 1;
        if(milliS == 100){
            second = second + 1;
            milliS = 0;
        }
        if(second == 60){
            minute = minute + 1;
            second = 0;
        }
        if(minute == 60){
           Hr = Hr + 1;
           minute = 0;
        }

let getsec = second;
let getmin = minute;
let getHr = Hr;

if(second <10){
    getsec = "0" + second;
}
if(minute <10){
 getmin = "0"+minute;
}
if(Hr<10){
    getHr = "0"+Hr;
}


        setTimeout("Myfun()",10)
        document.getElementById("milliS").innerHTML=milliS;
        document.getElementById("second").innerHTML=getsec;
        document.getElementById("minute").innerHTML=getmin;
        document.getElementById("Hr").innerHTML=getHr;
     }
 }