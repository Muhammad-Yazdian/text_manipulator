document.getElementById("btn-fix").onclick = function(){
  document.getElementById("text-out").innerHTML = 
    toTrueTitleCase(document.getElementById("text-in").value);
}