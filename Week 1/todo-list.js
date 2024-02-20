/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.todo_list = [];
  }
  add(todo){
    this.todo_list.push(todo);
    return this.todo_list;
  }
  remove(indexOfTodo){
    if (indexOfTodo >= 0 && indexOfTodo < this.todo_list.length) {
      this.todo_list.splice(indexOfTodo, 1);
    }
    return this.todo_list;
  }
  update(index, updatedTodo){
    if (index >= 0 && index < this.todo_list.length) {
      this.todo_list[index] = updatedTodo;
    }
    return this.todo_list;
  }
  get(indexOfTodo){
    if (indexOfTodo >= 0 && indexOfTodo < this.todo_list.length) {
      return this.todo_list[indexOfTodo];
    } else {
      // console.log("Invalid index.");
      return null;
    }
  }
  getAll(){
    return this.todo_list;
  }
  clear(){
    this.todo_list = [];
    return this.todo_list;
  }
}

module.exports = Todo;