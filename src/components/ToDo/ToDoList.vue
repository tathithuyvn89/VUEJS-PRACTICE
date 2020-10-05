<template>
  <div>
    <h1>Use emit and v-bind to tranfer data components</h1>
      <form v-on:submit.prevent= "addNewToDo">
          <label for="new-todo"> Add a todo</label>
          <input 
            v-model="newToDoText"
            id="new-todo"
            placeholder="E.g. Feed the cat"
            >
            <button>Add New TODO</button>
      </form>

      <ul>
        
        <ToDoItem
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove ="todos.splice(index,1)"
          />
          
      </ul>
  </div>
</template>

<script>
import ToDoItem from './ToDoItem'
export default {

  components: {
    ToDoItem
  },
 data(){
   return {
     newToDoText: '',
     todos: [
       {
         id:1,
         title: 'Search Vue Compponents'
       },
        {
         id:2,
         title: 'Search Vue X'
       },
        {
         id:3,
         title: 'Search Vue Router'
       },
        {
         id:4,
         title: 'Search Vue i18n'
       }
     ],
     nextToDoId: 5
   }
 },

 methods: {
   addNewToDo(){
     this.todos.push({
       id: this.newToDoId++,
       title: this.newToDoText
     });

     this.newToDoText= '';
   }
 }
}
</script>

<style>

</style>