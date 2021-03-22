import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
       todos: require("../data/todos"),
       notes: require("../data/notes"),
    },
    getters: {
        statusTrue(state) {
            return state.todos.filter(todo => todo.status === true);
        },
        statusFalse(state) {
            return state.todos.filter(todo => todo.status === false);
        },
    },
    mutations: {
        //TODO
        addTask(state, payload){
            state.todos.push({
                "id": _.uniqueId('todo_'),
                "task": payload.todoIdea,
                "status": false
            });
        },
        setAsDone(state, payload) {
            const index = _.findIndex(state.todos, ["id", payload.id]);
            state.todos[index][payload.type] = !state.todos[index][payload.type];
        },
        updateTask(state, payload) {
            const index = _.findIndex(state.todos, ["id", payload.id]);
            state.todos[index]['task'] = payload.value;
        },
        deleteTask(state, payload){
            const index = _.findIndex(state.todos, ["id", payload.id]);
            state.todos.splice(index, 1);
        },

        //NOTES
        addNote(state, payload){
            state.notes.push({
                id: _.uniqueId('note_'),
                title: payload.title,
                text: payload.text
            });
        },
        updateNote(state, payload) {
            const index = _.findIndex(state.notes, ["id", payload.id]);
            state.notes[index]['text'] = payload.text;
        },
        deleteNote(state, payload){
            const index = _.findIndex(state.notes, ["id", payload.id]);
            state.notes.splice(index, 1);
        },

    },
    actions: {
        remove(context, payload){

            setTimeout(() => {
                    context.commit("remove", payload);
            }, 2000)
        }
    }
});
