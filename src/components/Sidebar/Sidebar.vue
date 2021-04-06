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
    @import '../../styles/mixins.scss';
    @import '../../styles/Sidebar.scss';


</style>
