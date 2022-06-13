const app = new Vue({
    el: "#app",
    data: {
        todos: [
            {
                text: "Preparare il porridge",
                done: false,
            },
            {
                text: "Preparare il caffé",
                done: false,
            },
            {
                text: "Lavarmi i denti",
                done: false,
            },
            {
                text: "Accendere il PC",
                done: false,
            },
        ],
        newTodo: "",
    },
    methods: {
        addTodo() {
            if (this.newTodo.length > 1) {
                this.todos.push({
                    text: this.newTodo,
                    done: false
                });
                this.newTodo = "";
            }
        },
        removeTodo(index) {
            if (confirm(`Sei sicuro di eliminare "${this.todos[index].text}"?`)) {
                this.todos.splice(index, 1);
            }
        }
    }
})