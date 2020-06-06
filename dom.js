
var memoryArray = ['K','I','S','R','A','3','K','I','S','R','A','3']
 var memoryValue = []
 var memorytile = []
 var tilefliped = 0

    Array.prototype.memorytileshuffle = function(){
        var i = this.length, j, temp; 
    while(--i > 0){
         j = Math.floor(Math.random() * (i + 1)); 
        temp = this[j]; 
        this[j] = this[i] ;
        this[i] = temp;
                }
    } 

 function newboard(){
     tilefliped = 0;
     var output = '';
     memoryArray.memorytileshuffle();
     for(var i = 0 ; i < memoryArray.length ; i++){
         output += '<div id = "tile_'+i+'" onclick="memoryfliptile(this,\''+memoryArray[i]+'\')"></div>';
     }
     document.getElementById('memory_board').innerHTML = output;
     setTimeout(newboard, 10000)
    
    }



 function memoryfliptile(tile, val){
     if (tile.innerHTML == "" && memoryValue.length < 2){
        tile.style.background = 'white';
        tile.innerHTML = val ;
        
         if (memoryValue.length == 0){
             memoryValue.push(val) ; 
             memorytile.push(tile.id)
         }
         else if (memoryValue.length == 1){
             memoryValue.push(val);
             memorytile.push(tile.id);

             if(memoryValue[0] == memoryValue[1]){
                 tilefliped+=2 ;

                 // clear array
                 memoryValue = []
                 memorytile = []

                 // cek jika semua board cleared 
                 if (tilefliped == memoryArray.length){
                    alert("Selamat Kamu berhasil");
                    document.getElementById('memory_board').innerHTML = newboard();
                 }
                 else {
                    alert("Kamu kalah. lagi ?");
                    document.getElementById('memory_board').innerHTML = newboard();
                 }
             }

             else {
                 function flip2back(){

                     var tile_1 = document.getElementById(memorytile[0]);
                     var tile_2 = document.getElementById(memorytile[1]);
                     
                     tile_1.style.background = 'url(tile_bg.jpg no-repeat ';
                     tile_1.innerHTML = ''
                     tile_2.style.background = 'url(tile_bg.jpg no-repeat ';
                     tile_2.innerHTML = ''

                     memoryValue = []
                     memorytile = []
                 }
                  setTimeout(flip2back, 800)   
                 }
             }
         }
     }
 



       

 








