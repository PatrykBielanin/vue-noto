<template>

        <div>
             <!-- Navbar on tablets/phones -->
            <div class="d-lg-none">
                <div class="text-center topMenu" :style="{'backgroundColor': viewStyleColor}">
                    <div class="column col-4">
                        <router-link to="/notes"><p>NOTES</p></router-link>
                    </div>
                    <div class="column col-4">
                        <router-link to="/todos"><p>TODOS</p></router-link>
                    </div>
                    <div class="column col-4">
                        <router-link to="/about"><p>ABOUT</p></router-link>
                    </div>
                </div>
            </div>

            <!-- Page logo -->
            <div class="header col-12 text-center">
                <router-link to="/" exact><h1 :style="{'color': viewStyleColor}">N</h1></router-link>
            </div>

        </div>

</template>

<script>
    import {getViewStyleColor} from "../../mixins/mixins";

    export default {
        name: "Header",
        mixins: [getViewStyleColor]
    }
</script>

<style lang="scss">
    //Mixins
    @import '../../styles/mixins.scss';

    @import '../../styles/Header.scss';
</style>
