var list=[];
var task;
$(".addNew").click(function(){
    task=$(".newToDo").val();
    list.push(task);
    $(".ToDoList").append("<li>" + task + "</li>");
    $(".numTasks").text(list.length);
      
  
   
   
   
});