<template>
    <div class="d-none d-sm-none d-lg-block">
        <div class="col-xl-2 leftSide">
            <div class="sidebar" :style="{'backgroundColor': viewStyleColor}">
                <router-link to="/notes" class="iconWhite"><i class="bi bi-sticky"></i></router-link>
                <router-link to="/todos" class="iconWhite"><i class="bi bi-check2-square"></i></router-link>
                <router-link to="/about" class="iconWhite"><i class="bi bi-person"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {getViewStyleColor} from "../../mixins/mixins";

    export default {
        name: "Sidebar",
        mixins: [getViewStyleColor]
    }

</script>

<style lang="scss">
    //Mixins
    @import '../../assets/styles/mixins.scss';

    .iconWhite{
      color: white;
      font-size: 3rem;
    }

    .router-link-active{
      color: black;
      font-size: 3rem;
    }

    a{
        transition: color .25s ease-in;

        &:hover{
            color: rgb(104, 104, 104);
        }
    }


    .leftSide{
        height: 65vh;
        position: absolute;
        top: 35vh;
        margin-left: 10px;
    }

    .sidebar {
        width: 90px;
        height: 380px;
        border-radius: 90px;
        @include flexCenter();
        transition: background-color .5s ease-in;
    }

    .icon{
        font-size: 3rem;
        color: white;
    }

    .iconActive{
        font-size: 3rem;
        color: black;
    }

    //MEDIA QUERIES
    @media (max-width: 1180px) {
        .sidebar{
            width: 50%;
        }
    }

</style>
