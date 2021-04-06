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
    @import '../../styles/mixins.scss';
    //Vue animations
    @import '../../styles/VueAnimations.scss';

    @import '../../styles/NoteItem.scss';
</style>
