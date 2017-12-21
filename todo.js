var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit"){
    //handle input
  if(input === "list") {
    todos.forEach(function(todo, i){
      console.log("*********");
      console.log(i + ": " +  todo);
    });
      console.log("*********");
  } else if(input === "new") {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("TODO ADDED TO THE LIST!");
  } else if(input === "delete") {
    //ask for index to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    //splice()
    todos.splice(index, 1);
    console.log("DELETED TODO!");
  }

      //ask again for new input
      input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");
