const app = new Vue({
    el : '#root',
    data : {
        elements : [
            {
                category : 'To Do',
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
                ]
            },
            {
                category : 'Done',
                todos : [],
            }
        ],
        sentinel : 0,
        newTodo : '',
        tagId : 'element_',
        arrayCopy : [],
    },

    methods : {
        deleteTodo: function(i) {
            this.elements[this.sentinel].todos[i].done = true;
            this.elements[1].todos.push(this.elements[this.sentinel].todos[i]);
            this.elements[this.sentinel].todos.splice(i, 1);
        },

        addTodo: function() {
            if(this.newTodo != '') {
                const todoObject = {text : this.newTodo, done : false};
                this.elements[this.sentinel].todos.push(todoObject);
                this.newTodo = '';
            }
        },

        changeDone: function(i) {
            this.elements[this.sentinel].todos[i].done = !this.elements[this.sentinel].todos[i].done;
        },

        deleteSelected: function() {
            for(let i = 0; i < this.elements[0].todos.length; i++) {
                if(!this.elements[0].todos[i].done) {
                    this.arrayCopy.push(this.elements[0].todos[i]);
                } else {
                    this.elements[this.sentinel].todos[i].done = true;
                    this.elements[1].todos.push(this.elements[this.sentinel].todos[i]);
                }
            }
            this.elements[0].todos = this.arrayCopy;
            this.arrayCopy = [];
            
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