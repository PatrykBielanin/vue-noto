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
    @import '../../styles/mixins.scss';
    //Vue Animations
    @import '../../styles/VueAnimations.scss';

    @import '../../styles/NoteList.scss';
</style>
