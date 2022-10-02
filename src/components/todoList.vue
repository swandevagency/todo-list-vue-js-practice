<template>
    <div class="list" :key="todo.id" v-for="todo in allTodos">
        <TodoItem :id="todo.id" :title="todo.title" :completed="todo.completed"/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TodoItem from "./todoItem.vue";

export default {
    name: "TodoList",
    components: { TodoItem },
    computed: mapGetters(['allTodos']),
    methods: {
        ...mapActions(['getTodos']),
    },
    created: function() {
        this.getTodos();
    }
}
</script>

<style scoped>
    .list {
        margin-top: 16px;
        display: flex;
        align-items: center;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>