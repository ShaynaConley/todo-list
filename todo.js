document.getElementById("addBtn").addEventListener("click", addText);
 
function addText(){
  var listItem = document.createElement("li");
  listItem.innerText = document.getElementById("myInput").value;
  document.getElementById("myUl").appendChild(listItem);
  
  var button = document.createElement("button");
  button.className="delete";
  button.onclick = deleteText;
  button.innerText = "X";
  listItem.appendChild(button);
}

 
 
                                                 
function deleteText(){
 
  var list = this.parentNode;
  varul = list.parentNode;
  myUl.removeChild(list);
}
 
