<template>
    <div class="item add">
        <h3>Add Todo</h3>
        <div class="add">
            <form @submit="onSubmit">
                <input ref="title" type="text" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
    name: "AddTodo",
    data() {
        return {
            title: '',
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e) {
            e.preventDefault();
            this.addTodo(this.title);
            this.$refs.title.value = '';
        }
    }
}
</script>

<style scoped>
    .add {
        background-color: var(--main-item-color);
    }

    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 10px;
        border: 1px solid var(--second-item-color);
        outline: 0;
    }

    input[type="submit"] {
        flex: 2;
        background: var(--second-item-color);
        color: #fff;
        border: 1px var(--second-item-color) solid;
        cursor: pointer;
    }
</style>