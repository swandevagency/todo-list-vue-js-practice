
const todos = {
    state() {
        return {
            todos: [],
        };
    },
    getters: {
        allTodos: state => {
            return state.todos.sort((a, b) => {
                if (a.completed && !b.completed) {
                    return 1;
                }
                if (!a.completed && b.completed) {
                    return -1;
                }
                return 0;
            })
        }
    },
    actions: {
        getTodos({ commit }) {
            if (localStorage) {
                commit('setTodos', JSON.parse(localStorage.getItem('todos')));
            }
        },

        addTodo({ commit, state }, title) {
            let todos = localStorage.getItem('todos');
            let newTodo = {id: state.todos.length+1, title: title, completed: false};
            if (todos) {
                todos = JSON.parse(todos);
                todos.push(newTodo);
            } else {
                todos = [newTodo];
            }
            localStorage.setItem('todos', JSON.stringify(todos));
            commit('setTodos', todos);
        },

        removeTodo({ commit }, id) {
            let todos = JSON.parse(localStorage.getItem('todos'));
            todos = todos.filter((todo) => todo.id != id);
            localStorage.setItem('todos', JSON.stringify(todos));
            commit('setTodos', todos);
        },

        updateTodo({ commit }, newTodo) {
            let todos = JSON.parse(localStorage.getItem('todos'));
            let index = todos.findIndex(todo => todo.id == newTodo.id);
            if (index != -1) {
                todos.splice(index, 1, newTodo);
                localStorage.setItem('todos', JSON.stringify(todos));
            }
            commit('setTodos', todos);
        },
    },
    mutations: {
        setTodos: (state, todos) => (state.todos = todos),
        newTodo: (state, todo)  => (state.todos.unshift(todo)),
        removeTodo: (state, id)  =>  (state.todos = state.todos.filter(todo => todo.id != id)),
        updateTodo: (state, newTodo) => {
            let index = state.todos.findIndex(todo => todo.id == newTodo.id);
            if (index != -1) {
                state.todos.splice(index, 1, newTodo);
            }
        },
    },
};

export default todos;