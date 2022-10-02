<template>
    <div :class="['todo', getCompleted]" @click="onClick">
        <h4 ref="title" :contenteditable="editing">{{title}}</h4>
        <i class="fa-solid fa-check" v-if="editing" style="margin-right: 4px " @click="doneEdit"></i>
        <i class="fa-solid fa-pen" v-else style="margin-right: 4px " @click="startEdit"></i>
        <i class="fa-solid fa-trash" @click="onTrashClick"></i>
    </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
    name: "TodoItem",
    data() {
        return {
            clicks: 0,
            timer: null,
            editing: false,
        }
    },
    props: {
        id: Number,
        title: String,
        completed: Boolean,
    },
    computed: {
        getCompleted() {
            return this.completed ? 'completed' : '';
        }
    },
    methods: {
        ...mapActions(['removeTodo', 'updateTodo']),
        onTrashClick() {
            this.removeTodo(this.id);
        },
        onClick() {
            this.clicks++;
            if (this.clicks == 1) {
                this.timer = setTimeout(() => {
                    this.clicks = 0;
                }, 700);
            } else {
                this.updateTodo({id: this.id, title: this.title, completed: !this.completed});
                clearTimeout(this.timer);
                this.clicks = 0;
            }
        },

        startEdit() {
            this.editing = true;
        },

        doneEdit() {
            const newTitle = this.$el.querySelector("h4").textContent;
            this.updateTodo({id: this.id, title: newTitle, completed: this.completed});
            this.editing = false;
        }
    }
}
</script>

<style scoped>
    .todo {
        width: 80%;
        border-left: 6px solid red;
        padding: 0 8px;
        margin-top: 16px;
        display: flex;
        align-items: center;
        background-color: var(--second-bg-color);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .completed {
        border-left-color: aqua;
    }

    i {
        color: var(--second-item-color);
        margin-left: 8px;
    }

    i.fa-check {
        color: green;
    }

    i.fa-trash:hover {
        color: red;
    }

    i.fa-pen:hover {
        color: black;
    }

    i.fa-check:hover {
        color: black;
    }

    h4 {
        width: 100%;
        text-align: left;
        margin-left: 8px;
    }
</style>