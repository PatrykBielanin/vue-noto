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
    <!-- <li>
        <template v-if="editMode === true">
            <button class="btn btn-error" @click="deleteTask()">
                <i class="icon icon-cross"></i>
            </button>

            <button class="btn btn-error" @click="editTask = !editTask">
                <i class="icon icon-edit"></i>
            </button>
            <template v-if="editTask">
                <input type="text" class="form-input col-12" :value="todo.task" @change="updateTask($event)"/>
            </template>

            <template v-else>
                {{todo.task}}
            </template>
        </template>

        <template v-else>
            {{todo.task}}
        </template>
        <button class="btn" :class="{ 'btn-error': !todo.status, 'btn-success': todo.status }"  @click="setAsDone('status')">

            <template v-if="todo.status === false">
                <i class="icon icon-cross"></i>
            </template>

            <template v-else>
                <i class="icon icon-check"></i>
            </template>

        </button>
    </li> -->

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
    @import '../../assets/styles/mixins.scss';

    .tasks{

        /* Vue animations */
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s
        }
        .fade-enter, .fade-leave-to{
            opacity: 0
        }

        li{
            list-style: none;
        }

        .bi{
            transition: all .2s ease-in;
            cursor: pointer;
        }
        .bi-check-square-fill{
            font-size: 2.5rem;
            color: rgb(0, 207, 0);
        }

        .bi-x-square-fill{
            font-size: 2.5rem;
            color: rgb(230, 0, 0);
        }

        .task{
            @include flexCenter();
            height: 6vh;

            .taskText{
                margin: auto;
                padding: 5px;
                border: 1px solid black;
                border-radius: 3px;
                width: 25vw;
                overflow: auto;
                font-size: 18px;

                &-edit{
                    margin: auto;
                    border-radius: 3px;
                    width: 25vw;
                    overflow: auto;
                    font-size: 18px;
                    border: 1px solid rgba(92, 210, 246, 1);
                }
            }

            .taskIcon{
                margin-left: 20px;
                margin-right: 20px;
            }

            .editTaskOptions{
                left: 30%;
                position: absolute;

                .bi-x{
                    color: red;
                    font-size: 1.25rem;
                }

                .bi-pencil-square{
                    color: rgb(0, 0, 0);
                }

                .bi-check2{
                    color: green;
                }
            }
        }
    }
    .editTaskOptions-lg{
        display: none;
    }
    @media (max-width: 1440px){
        .tasks{
            .task{
                .taskText{
                    width: 35vw;
                }

                .editTaskOptions{
                    left: 20%;
                    position: absolute;
                }
            }
        }

    }

    @media (max-width: 991px) {
        .tasks{
            .task{
                margin-bottom: 70px;
                .taskText{
                    width: 60vw;

                    &-edit{
                    width: 60vw;
                    }
                }

                .editTaskOptions{
                    display: none;
                }

                .editTaskOptions-lg{
                    @include flexCenter();
                    position: absolute;
                    margin: auto;
                    width: 60vw;
                    margin-right: 70px;
                    margin-bottom: 55px;
                    i{
                        font-size: 1.25rem;
                    }
                }
            }
        }
    }

    @media (max-width: 350px) {
        .tasks{
            .task{
                .taskText{
                    width: 55vw;
                }
            }
        }
    }

    @media (max-height: 580px) {
        .tasks{
            .task{
                margin-bottom: 95px;
            }
        }
    }



</style>
