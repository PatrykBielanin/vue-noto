<template functional>
        <div>
            <div class="d-none d-sm-none d-lg-block">
                <div class="col-xl-12 rightSide">
                    <div class="contentText col-6">
                        <h2>NOTO</h2>
                        <div class="blackLine mb-2"></div>
                        <p class="pr-5 text-center">NOTO is an Vue.js based simple application which provides creating notes and todo lists. Organize your work by saving things you've done and these which are still up to be done. Create simple note and save your ideas for later!</p>
                    </div>

                    <div class="contentImage col-6">
                        <img src="https://images.unsplash.com/photo-1518611507436-f9221403cca2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80"
                            class="img-fluid" alt="office">
                    </div>
                </div>
            </div>


            <div class="d-lg-none">
                <div class="contentText-lg col-12">
                    <h2 class="text-center">NOTO</h2>
                    <div class="blackLine mb-2"></div>
                    <p class="p-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
                        laudantium
                        distinctio.
                        Optio
                        voluptatum
                        unde cum iusto! Maiores cum necessitatibus facilis itaque eum ex, repudiandae vitae optio,
                        at
                        officiis
                        sit autem.</p>
                </div>

                <div class="contentImage-lg col-12">
                    <img src="https://images.unsplash.com/photo-1518611507436-f9221403cca2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80"
                        class="img-fluid" alt="office">
                </div>

            </div>
        </div>
</template>

<style lang="scss">
    //Mixins
    @import '../../assets/styles/mixins.scss';


    .contentText{
        @include flexCenter();
        flex-direction: column;
        width: 45vw;
        height: 50vh;

        h2{
            font-size: 40px;
        }

        p{
            font-size: 18px;
        }
    }

    .contentImage{
        width: 35vw;
        height: 50vh;
        @include flexCenter();

        img{
            width: 80%;
            box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.322);
        }
    }

    .rightSide{
        @include flexCenter();
    }

    .blackLine {
        width: 20vw;
        height: 0px;
        border: 1px solid rgba(0, 0, 0, 0.794);
        box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.322);
    }

    //Tablets and phones
    .contentText-lg{
        @include flexCenter();
        flex-direction: column;

        .blackLine{
            width: 40vw;
        }
    }

</style>
