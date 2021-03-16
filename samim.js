var correctPin=document.getElementById("generate-pin-btn").addEventListener("click",function(){
    var generatePin =document.getElementById("generateOutput").value=Math.floor(Math.random() *100)*999;
});
var submit=document.getElementById("submit").addEventListener("click",function(){
   var numberOutputCorrect=document.getElementById("numberOutput").value;
   var generatePin =document.getElementById("generateOutput").value;
   if(numberOutputCorrect==generatePin){
    document.getElementById("correct-alert").style.display="block";
    document.getElementById("wrong-alert").style.display="none";
}
else{
    document.getElementById("correct-alert").style.display="none";
    document.getElementById("wrong-alert").style.display="block";

    var submitCount=parseInt(document.getElementById("submit-count").innerText);
    document.getElementById("submit-count").innerText=submitCount-1;
    if(submitCount===1){
        document.getElementById("submit").disabled = true;
        document.getElementById("limit-alert").style.display = "block";
        document.getElementById("correct-alert").style.display = "none";
        document.getElementById("wrong-alert").style.display = "none";
        document.getElementById("limit").innerText = "Limit exceeded";
    }
}
});




