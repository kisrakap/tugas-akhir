let moves = 0;
let counter = document.querySelector(".moves");
let sama = document.getElementById

    // document.body.onload = init();


        function kliktombol(x){
            document.getElementById("btn"+x+"D").style.transform="perspective(600px)rotateY(-180deg)";
            document.getElementById("btn"+x+"B").style.transform="perspective(600px)rotateY(0deg)";

            
            // reset moves
             moves++;
             counter.innerHTML = moves;


            if (moves == 2){
                match()
            }

        }   
                moves = 0
        function match() {
            
              if (document.getElementById("btn"+x+"B").src == document.getElementById("btn"+x+1+"B")){
                document.getElementById("btn"+x+"B").disabled="disabled";
              }
              else {
                document.getElementById("btn"+x+"D").style.transform="perspective(600px)rotateY(-180deg)";
              }
              
        }

        

        function menang(){
            alert("kamu menang")
        }

        function kalah(){
            alert("kamu kalah")
        }
        
       
        
//         //Count player's moves
// function moveCounter(){
//     moves++;
//     counter.innerHTML = moves;
//     //start timer on first click
//     if(moves == 1){
//         second = 0;
//         minute = 0; 
//         hour = 0;
//         startTimer();
//     }
// //Timer
// var second = 0, minute = 0; hour = 0;
// var timer = document.querySelector(".timer");
// var interval;
// function startTimer(){
//     interval = setInterval(function(){
//         timer.innerHTML = " " + minute+" mins "+second+" secs";
//         second++;
//         if(second == 60){
//             minute++;
//             second=0;
//         }
//         if(minute == 60){
//             hour++;
//             minute = 0;
//         }
//     },1000);
// }


       

 








