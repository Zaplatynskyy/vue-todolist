const app = new Vue({
    el : '#root',
    data : {
        todos : [
            {
                text : 'Fare la spesa',
                done : false
            },
            {
                text : 'Fare la lavatrice',
                done : false
            },
            {
                text : 'Preparare il pasto',
                done : false
            },
            {
                text : 'Pulire casa',
                done : false
            },
            {
                text : 'Lavorare al pc',
                done : false
            },
            {
                text : 'Chiamare John',
                done : false
            }
        ],

        newTodo : ''
    },

    methods : {
        deleteTodo: function(i) {
            this.todos.splice(i,1);
        },

        addTodo: function() {
            if(this.newTodo != '') {
                const todoObject = {text : this.newTodo, done : false};
                this.todos.push(todoObject);
                this.newTodo = '';
            }
        },

        changeDone: function(i) {
            this.todos[i].done = !this.todos[i].done
        }
    },
});

// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)