<template>
    <transition name="fade" mode="out-in" appear>
        <li class="task mt-3">

            <template v-if="editMode === true">
                <div class="editTaskOptions">
                    <button class="btn btn-error" @click="deleteTask()">
                        <i class="bi bi-x"></i>
                    </button>

                    <button class="btn btn-error" @click="editTask = !editTask">
                        <i class="bi" :class="{ 'bi-pencil-square': !editTask, 'bi-check2': editTask }"></i>
                    </button>
                </div>


                <template v-if="editTask">
                    <input type="text" class="taskText-edit text-center" :maxlength="50" :value="todo.task" @change="updateTask($event)"/>
                </template>

                <template v-else>
                    <p class="taskText">{{todo.task}}</p>
                </template>

                <div class="editTaskOptions-lg">
                    <button class="btn btn-error" @click="deleteTask()">
                        <i class="bi bi-x"></i>
                    </button>

                    <button class="btn btn-error" @click="editTask = !editTask">
                        <i class="bi" :class="{ 'bi-pencil-square': !editTask, 'bi-check2': editTask }"></i>
                    </button>
                </div>
            </template>

            <template v-else>
                <p class="taskText">{{todo.task}}</p>
            </template>

            <i class="bi taskIcon" :class="{ 'bi-x-square-fill': !todo.status, 'bi-check-square-fill': todo.status }"  @click="setAsDone('status')" />

        </li>
    </transition>
</template>

<script>

export default {
    name: "TodoItem",
    data(){
        return{
            editTask: false
        }
    },
    props:['todo', 'index', 'editMode'],
    methods: {
        setAsDone(type) {
            this.$store.commit("setAsDone", {
                type,
                id: this.todo.id
            });
        },

        updateTask(e) {
            this.$store.commit("updateTask", {
                id: this.todo.id,
                value: e.target.value
            });
        },

        deleteTask(){
            this.$store.commit("deleteTask", {id: this.todo.id});
        }
    },
}
</script>

<style lang="scss">
    //Mixins
    @import '../../styles/mixins.scss';

    @import '../../styles/TodoItem.scss';
</style>
