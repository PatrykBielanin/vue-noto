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
    @import '../../assets/styles/mixins.scss';
    $topMenuColor: rgb(255, 255, 255);

    .header{
        height: 20vh;

        h1 {
            font-family: 'Post No Bills Jaffna';
            font-weight: 800;
            font-size: 96px;
            transition: color .5s ease-in;
        }
    }

    a{
        text-decoration: none;
    }

    // TABLETS/PHONES
    .topMenu {
        padding: 20px 0 5px 0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: background-color .5s ease-in;
        @include flexCenter();

        p{
            font-size: 22px;
            color: $topMenuColor;
        }
    }
</style>
