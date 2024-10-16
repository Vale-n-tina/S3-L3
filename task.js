const addform = document.getElementById("form");
addform.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTaskImput = document.getElementById("newtask");

  const addnewtask = {
    newtask: newTaskImput.value,
  };


   const list= document.getElementById("list")

  

  const taskk=document.createElement("li")
  taskk.innerText=addnewtask.newtask

  const deledebutton=document.createElement("button")
  deledebutton.innerText= "Elimina"
  deledebutton.addEventListener("click", function (){
      list.removeChild(taskk)
  })

   taskk.appendChild(deledebutton)
  taskk.addEventListener("click", function(){
    taskk.classList.add ("completato")  
  
})
list.appendChild(taskk)


addform.reset()

})
//const taskelement=document.getElementById("listatask")
// taskelement.addEventListener("click", function(){
//    taskelement.