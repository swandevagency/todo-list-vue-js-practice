<template>
  <div class="container">
    <AddTodo />
    <TodoList />
  </div>
</template>

<script>
  import AddTodo from "./components/addTodo.vue";
  import TodoList from "./components/todoList.vue";

export default {
  name: 'App',
  components: {
    AddTodo: AddTodo,
     TodoList: TodoList
  },
}
</script>

<style>
  :root {
    --main-bg-color: #EEF1FF;
    --second-bg-color: #D2DAFF;
    --main-item-color: #AAC4FF;
    --second-item-color: #B1B2FF;
  }

  body {
    background-color: var(--main-bg-color);
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 auto;
  }

  .item {
    width: 100%;
    margin-top: 16px;
    padding: 16px;
    border-radius: 10px;
  }
</style>
