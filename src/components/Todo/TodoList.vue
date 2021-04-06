<template>

        <div>
            <div class="col-xl-12 rightSideTodos mt-5">
                <transition name="fade" mode="out-in" appear>
                    <div v-if="error" class="alert alert-danger" role="alert">
                        {{error_message}}
                    </div>
                </transition>

                <!-- Creating task -->
                <div class="createTask">
                    <h2 class="text-center">Add your task</h2>
                    <div class="createTaskInput mt-3">
                        <input class="taskInput" type="text" placeholder="text.." :maxlength="50" v-model="todoIdea"/>
                        <i class="bi bi-plus" @click="addTask()"/>
                    </div>
                </div>

                <!-- Options panel on top of tasks -->
                <div class="tasksOptions-lg mt-3 mb-5">
                    <template v-if="!editMode">
                        <button @click="editMode = !editMode">
                            EDIT MODE
                        </button>
                    </template>

                    <template v-else>
                        <button @click="editMode = !editMode">
                            EDIT MODE OFF
                        </button>
                    </template>

                    <div class="selectTask-lg mt-5">
                        <div class="form-check">
                            <input type="radio" :value="null"  id="option-one" v-model="taskStatus" />
                            <label for="option-one" class="form-radio">
                                All
                            </label>
                        </div>
                        <div class="form-check">
                            <input type="radio" :value="true"  id="option-three" v-model="taskStatus" />
                            <label for="option-three" class="form-radio">
                                Finished
                            </label>
                        </div>
                        <div class="form-check">
                            <input type="radio" :value="false"  id="option-two" v-model="taskStatus" />
                            <label for="option-two" class="form-radio">
                                Not finished
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Added tasks and edit -->

                <div class="tasks text-center">
                    <template v-if="todos.length">
                        <ul>
                            <TodoItem v-for="(todo, index) in todos"
                            :todo="todo"
                            :index="index"
                            :key="todo.id"
                            :editMode="editMode"
                            />
                        </ul>
                    </template>

                    <template v-else>
                        <div class="empty mt-5">
                            <p class="empty-title">There's nothing here so far</p>
                        </div>
                    </template>
                </div>

                <!-- Options panel on right -->
                <div class="tasksOptions">
                    <template v-if="!editMode">
                        <button @click="editMode = !editMode">
                            EDIT MODE
                        </button>
                    </template>

                    <template v-else>
                        <button @click="editMode = !editMode">
                            EDIT MODE OFF
                        </button>
                    </template>

                    <div class="selectTask mt-4">
                        <p class="text-center" style="color: lightgray;">Show tasks:</p>
                        <div class="form-check">
                            <input type="radio" :value="null"  id="option-one" v-model="taskStatus" />
                            <label for="option-one" class="form-radio">
                                All
                            </label>
                        </div>
                        <div class="form-check">
                            <input type="radio" :value="true"  id="option-three" v-model="taskStatus" />
                            <label for="option-three" class="form-radio">
                                Finished
                            </label>
                        </div>
                        <div class="form-check">
                            <input type="radio" :value="false"  id="option-two" v-model="taskStatus" />
                            <label for="option-two" class="form-radio">
                                Not finished
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</template>

<script>

    import TodoItem from "./TodoItem";

    export default {
        name: "TodoList",
        data (){
            return{
                icon: "todo",
                taskStatus: null,
                todoIdea: "",
                editMode: false,
                error: false,
                error_message: ""
            }
        },
        computed: {
            todos() {
                if(this.taskStatus === true) {
                    return this.$store.getters.statusTrue;
                } else if(this.taskStatus === false) {
                    return this.$store.getters.statusFalse;
                } else {
                    return this.$store.state.todos;
                }
            }
        },
        methods: {
            addTask(){
                if(this.todoIdea === ""){
                    this.error = true;
                    this.error_message = "Enter the content of the task";
                } else{
                    this.error = false;
                    this.$store.commit("addTask", {todoIdea: this.todoIdea});
                }
            }
        },
        components:{
            TodoItem
        },
    }
</script>

<style lang="scss">
    //Mixins
    @import '../../styles/mixins.scss';

    @import '../../styles/TodoList.scss';
</style>
