<template>
    <transition name="fade" mode="out-in" appear>
        <div class="note-xl col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <div class="column phoneRes mt-4">
                    <div class="editButtons-lg">
                        <i class="bi" :class="{ 'bi-pen': !editMode, 'bi-check2': editMode}" style="font-size: 1.25rem; color: white" @click="editMode = !editMode"></i>
                        <div class="blackLine-lg"></div>
                        <i class="bi bi-trash" style="font-size: 1.25rem; color: white" @click="deleteNote()"></i>
                    </div>

                    <div class="note text-center" id="style-3">
                        <div class="noteTitle">
                            <input class="text-center" type="text" :value="note.title" readonly>
                        </div>

                        <template v-if="editMode">
                            <textarea :value="note.text" @change="updateNote($event)" />
                        </template>

                        <template v-else>
                            <p>{{note.text}}</p>
                        </template>
                    </div>
                </div>

            <div class="row desktopRes">
                <div class="note text-center" id="style-3">
                    <div class="noteTitle">
                        <input class="text-center" type="text" :value="note.title" readonly>
                    </div>

                    <template v-if="editMode">
                        <textarea :value="note.text" @change="updateNote($event)" />
                    </template>

                    <template v-else>
                        <p>{{note.text}}</p>
                    </template>
                </div>

                <div class="editButtons">
                    <i class="bi" :class="{ 'bi-pen': !editMode, 'bi-check2': editMode}" @click="editMode = !editMode"></i>
                    <div class="blackLine"></div>
                    <i class="bi bi-trash" @click="deleteNote()"></i>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

    export default {
        name: "NoteItem",
        data (){
            return{
                editMode: false,
            }
        },
        props: ["note", "index"],
        methods: {
            updateNote(e){
                this.$store.commit("updateNote", {
                    id: this.note.id,
                    text: e.target.value
                })
            },
            deleteNote(){
                this.$store.commit("deleteNote", {id: this.note.id})
            }
        }
    }
</script>

<style lang="scss" scoped>
    //Mixins
    @import '../../assets/styles/mixins.scss';

    /* Vue animations */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to{
        opacity: 0
    }


    .note {
        @include flexCenter();
        width: 275px;
        height: 340px;

        margin-top: 30px;
        background: rgba(235, 235, 235, 0.71);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        overflow-y: auto;
        overflow-x: hidden;
        overflow-wrap: break-word;

        p{
            width: 90%;
            height: 70%;
            justify-content: center;
        }

        textarea{
            margin-top: 30px;
            width: 90%;
            height: 75%;
        }

    }

    input,
    textarea {
        background-color: transparent;
        border: none;
        width: inherit;
        height: inherit;
        font-size: 18px;
        padding-left: 10px;
        outline: none;
    }


    .noteTitle {
        @include flexCenter();
        width: 280px;
        height: 40px;
        background: #ffffff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        font-size: 18px;
    }


    .editButtons {
        width: 45px;
        height: 96px;

        background: #F75C5C;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 5px;

        @include flexCenter();
        align-self: flex-end;

        .blackLine {
            width: 100%;
            height: 0px;
            position: relative;
            border: 1px solid rgba(0, 0, 0, 0.13);
        }

        i{
            font-size: 1.25rem;
            color: white;
            transition: color 0.5 ease-out;
            &:hover{
                color: rgb(104, 104, 104);
                cursor: pointer;
            }
        }
    }

    .editButtons-lg{
        display: none;
    }

    .desktopRes{
            display: flex;
        }

        .phoneRes{
            display: none;
        }

    @media (max-width: 767px) {
        .note-xl{
            width: 95vw;
        }

        .note{
            margin: auto;
            margin-top: 20px;
            margin-bottom: 30px;
        }
        .desktopRes{
            display: none;
        }

        .phoneRes{
            display: flex;
            flex-direction: column;
        }
        .editButtons-lg{
            height: 45px;
            width: 96px;

            margin: auto;
            background: #F75C5C;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            padding: 5px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            div, i{
                width: calc(100% - 45px);
                height: 85%;
                margin-left: 10px;
            }

            .blackLine-lg{
                width: 45px;
                height: 0px;
                position: absolute;
                transform: rotate(-90deg);
                border: 1px solid rgba(0, 0, 0, 0.13);
                margin: 0 20px 0 20px;
            }
        }


        .editButtons{
            display: none;
        }
    }


    // NOTES SCROLL
    #style-3::-webkit-scrollbar-track {
        background-color: #F5F5F5;
    }
    #style-3::-webkit-scrollbar {
        width: 5px;
        background-color: #F5F5F5;
    }
    #style-3::-webkit-scrollbar-thumb {
        background-color: #00000015;
    }


</style>
