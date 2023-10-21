var fruit_list=[];

function fruits(){
    var fruits =document.getElementById("fruits");
    var fruit_value= fruits.value;
    if(fruit_value){
    fruit_list.push(fruit_value);
    fruits.value="";
    }

    


}
function display(){

    var display_fruits= document.getElementById("result");
    display_fruits.innerHTML="";



  
   for(var i=0;i<fruit_list.length;i++){

    var fruit=document.createElement("li");
    fruit.textContent=fruit_list[i];
    display_fruits.appendChild(fruit);
    
    
   }

}

document.getElementById("submit").addEventListener("click",fruits);
document.getElementById("display").addEventListener("click",display);