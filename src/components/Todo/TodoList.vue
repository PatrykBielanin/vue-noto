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
    @import '../../assets/styles/mixins.scss';
    $viewColor: rgba(92, 210, 246, 1);

    .rightSideTodos{
        @include flexCenter();
        flex-direction: column;
        margin: auto;

        /* Vue animations */
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s
        }
        .fade-enter, .fade-leave-to{
            opacity: 0
        }
    }

    .alert{
        @include flexCenter();
        background: rgba(247, 92, 92, 1);
        width: 30vw;
        margin: auto;
        margin-bottom: 10px;
        animation: fadein .5s;
    }

    .empty{
        background-color: rgba(248, 248, 248, .5);
        color: gray;
        width: 30vw;
        height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .createTask{
        width: 30vw;
        height: 20vh;

        /* position: absolute;
        top: 30%; */
        background: $viewColor;
        border-radius: 5px;
        @include flexCenter();
        flex-direction: column;

        input{
            background-color: rgba(0, 0, 0, 0.1);
            border: none;
            width: 85%;
            height: inherit;
            /* font-size: 18px; */
            padding-left: 10px;
            outline: none;

        }

        ::placeholder {
            color: black;
            opacity: .5;
        }


        .createTaskInput{
            width: 40vh;
            flex-direction: row;

            .bi{
                font-size: 24px;
                margin-top: -5px;
                position: absolute;

                &:hover{
                    cursor: pointer;
                }
            }

            .taskInput{
                color:rgba(0, 0, 0, 0.5);
                transition: background-color .5s ease-in;
                font-size: 1.1rem;

                &:focus{
                    background-color: rgba(255, 255, 255, 0.8);
                    color: black;
                }
            }
        }
    }


    .tasksOptions{
        position: fixed;
        top: 50%;
        right: 20%;

        @include flexCenter();
        flex-direction: column;

        color:rgba(0, 0, 0, 0.5);

        button{
            margin: auto;
            background: $viewColor;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border: 1px solid $viewColor;
            border-radius: 5px;
            padding: 10px;
            background-color: $viewColor;
            transition: background-color .25s ease-out;

            &:hover{
                background-color: white;
                border: 1px solid $viewColor;
            }
        }

        input:checked{
            background-color: $viewColor;
            border-color: $viewColor;
        }
    }

    .tasksOptions-lg{
        @include flexCenter();
        flex-direction: column;
        color:rgba(0, 0, 0, 0.5);
        padding: 10px;


        .selectTask-lg{
            display: flex;
            flex-direction: row;

            div{
                margin-right: 20px;
                font-size: 1.15rem;
                &:last-child{
                    margin-right: 0;
                }
            }


        }

        button{
            margin: auto;
            background: $viewColor;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border: none;
            border-radius: 5px;
            padding: 10px;
            background-color: $viewColor;
            transition: background-color .25s ease-out;

            &:hover{
                background-color: white;
                border: 1px solid $viewColor;
            }
        }

        input:checked{
            background-color: $viewColor;
            border-color: $viewColor;
        }
    }


    @media (max-width: 1440px) {
        .createTask{
            width: 45vw;
            height: 25vh;
        }

        .tasksOptions{
            position: fixed;
            top: 50%;
            right: 10%;
        }

        .empty{
            width: 45vw;
            height: 15vh;
        }
    }

    @media (max-width: 991px) {
        .createTask{
            width: 80vw;
            height: 20vh;
            margin-top: -50px;
        }

        .tasksOptions{
            display: none;
        }

        .empty{
            width: 80vw;
            height: 20vh;
            margin-bottom: 40px;
        }
    }

    @media (max-width: 660px) {
        .tasksOptions-lg{
            .selectTask-lg{
            flex-direction: column;
            flex-wrap: nowrap;
            }
        }
    }


    @media (min-width: 992px) {
        .tasksOptions-lg{
            display: none;
        }
    }

    @media (min-width: 510px) {
        .tasks{
            .task{
                .taskText{
                    width: 80vw;
                }
                .taskIcon{
                    margin-left: 5px;
                    margin-right: 20px;
                }
            }
        }
    }


    @media (max-width: 509px) {
        .createTask{
            width: 90vw;
            height: 30vh;
            margin-top: -20px;

            input{
                width: 85%;
            }
            .createTaskInput{
                width: 80vw;
            }
        }

        .empty{
            width: 90vw;
            height: 25vh;
        }
    }


    //INPUT RADIO
    $fg: lighten($viewColor,10%);
    $borderWidth: 3px;
    input[type=radio] {
        position: absolute;
        visibility: hidden;
        display: none;
    }

    label {
        color: lighten($viewColor,10%);
        display: inline-block;
        cursor: pointer;
        font-weight: bold;
        padding: 5px 20px;
    }

    input[type=radio]:checked + label{
        color: lighten($viewColor,90%);
        background: $fg;
    }

    label + input[type=radio] + label {
        border-left: solid $borderWidth $fg;
    }
    .radio-group {
        border: solid $borderWidth $fg;
        display: inline-block;
        margin: 20px;
        border-radius: 10px;
        overflow: hidden;
    }

    //SCROLLBAR
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgb(185, 185, 185);
    }
    ::-webkit-scrollbar-thumb:hover{
        background: linear-gradient(13deg, #e6e6e6 14%,#969696 64%);
    }

    ::-webkit-scrollbar-track{
        background: #ffffff;
        border-radius: 7px;
        box-shadow: inset 7px 10px 12px #f0f0f0;
    }


</style>
