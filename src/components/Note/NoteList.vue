<template>
        <div>
            <transition name="fade" mode="out-in" appear>
                <div v-if="error" class="alert alert-danger" role="alert">
                    {{error_message}}
                </div>
            </transition>

            <div class="d-none d-sm-none d-lg-block">
                <div class="col-xl-12 rightSide mt-5">
                    <div class="createNote">
                        <h2 class="text-center mt-3">Add your note</h2>

                        <input class="titleBackground" type="text" placeholder="title (max 20 characters)" :maxlength="max" v-model="title" />

                        <textarea class="textBackground" type="text" placeholder="text.." rows="8" v-model="text"/>

                        <button class="createButton mb-3" @click="addNote()">SAVE</button>
                    </div>
                </div>
            </div>

            <div class="d-lg-none">
                <div class="createNote-lg">
                    <h2 class="text-center mt-2">Add your note</h2>

                    <input class="titleBackground-lg" type="text" placeholder="title (max 20 characters)" :maxlength="max" v-model="title" />

                    <textarea class="textBackground-lg" type="text" placeholder="text.." rows="8" v-model="text"/>

                    <button class="createButton" @click="addNote()">SAVE</button>
                </div>
            </div>
            <div class="space mt-5">
                <div class="blackLine mt-5"></div>
            </div>

            <template v-if="notes.length">
                <div class="createdNotes mt-5 mb-5">
                    <NoteItem v-for="(note, index) in notes"
                        :key="index"
                        :note="note"
                        :index="index"
                        />
                </div>
            </template>

            <template v-else>
                    <div class="emptyNotes text-center mt-5">
                    <p style="color: gray;">There's nothing here so far</p>
                </div>
            </template>
        </div>
</template>


<script>

    import NoteItem from "./NoteItem";


    export default {
        name: "NoteList",
        data(){
            return{
                icon: "notes",
                title: "",
                text: "",
                max: 20,
                error: false,
                error_message: ""
            }
        },
        props: ['notes'],
        methods:{
            addNote(){
                if(this.title == 0 || this.text == 0){
                    this.error = true;
                    return this.error_message = "Add a title and note text ";
                } else{
                    this.error = false;
                    this.$store.commit("addNote", {
                        title: this.title,
                        text: this.text
                    })
                };
            },
        },
        components:{
            NoteItem
        }
    }
</script>

<style lang="scss">
    //Mixins
    @import '../../assets/styles/mixins.scss';
    $viewColor: rgba(247, 92, 92, 1);

    .rightSide{
        @include flexCenter();
        margin: auto;
    }

    /* Vue animations */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to{
        opacity: 0
    }

    .alert{
        @include flexCenter();
        background: $viewColor;
        width: 50vw;
        margin: auto;
        margin-bottom: -40px;
        animation: fadein .5s;
    }
    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    .createNote {
        width: 50vw;
        height: 50vh;

        background: rgba(247, 92, 92, 0.7);
        border-radius: 5px;
        @include flexCenter();
        h2 {
            font-size: 32px;
            color: black
        }

        div{
            height: 25%;
        }

        .titleBackground,
        .textBackground {
            width: 45vw;
            height: 5vh;
            background-color: rgba(0, 0, 0, 0.05);
            border-bottom: 1px solid black;
            transition: background-color, font-size .5s ease-out;
            font-size: 1rem;


            &:focus{
                font-size: 1.1rem;
                background-color: rgba(255, 255, 255, 0.733);

            }
        }

        .textBackground{
            height: 20vh;
        }

        .createButton {
            width: 7vw;
            height: 5vh;
            background: rgba(255, 255, 255, 0.972);
            border-radius: 5px;
            color: rgb(0, 0, 0);
            font-size: 18px;
            border: none;
            transition: background .1s ease-out;

            &:hover{
                background: black;
                color: white;
            }
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

    ::placeholder {
        color: rgb(0, 0, 0);
        opacity: 0.5;
    }

    .space{
        @include flexCenter();

        .blackLine {
            width: 45vw;
            height: 0px;
            border: 1px solid rgba(0, 0, 0, 0.452);
            box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.322);
        }

    }

    .createdNotes{
        @include flexCenter();
        width: 85vw;
        float: right;
    }


    .createNote-lg{
        width: 93vw;
        height: 60vh;

        margin-right: 30px;
        background: rgba(247, 92, 92, 0.7);
        border-radius: 3px;

        @include flexCenter();

        h2{
            font-size: 24px;
        }

        .titleBackground-lg, .textBackground-lg {
            width: 90vw;
            height: 5vh;
            background-color: rgba(0, 0, 0, 0.05);
            border-bottom: 1px solid black;
            transition: background-color .5s ease-in;

            &:focus{
                background-color: rgba(255, 255, 255, 0.733);
            }
        }

        .textBackground-lg {
            height: 20vh;
        }

        .createButton {
            width: 20vw;
            height: 7vh;
            background: rgba(255, 255, 255, 0.82);
            border-radius: 5px;
            color: rgb(0, 0, 0);
            font-size: 18px;
            border: none;

            :hover{
                background: black;
                color: white;
            }
        }

    }

    //MEDIA QUERIES
    @media (max-width: 1180px) {
        .sidebar{
            width: 50%;
        }
    }

    @media (max-width: 767px) {
        .createdNotes{
            width: 100%;
            .note-xl{
                @include flexCenter();
            }
        }
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
