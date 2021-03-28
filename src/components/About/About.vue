<template>
        <div class="column col-12">
            <div class="about">
                <h2>Find us</h2>
                <div class="socialMedia mt-2">
                    <i class="bi bi-facebook m-3" style="font-size: 3rem"></i>
                    <i class="bi bi-twitter m-3" style="font-size: 3rem"></i>
                    <a href="https://github.com/PatrykBielanin/vuenetlify" target="_blank"><i class="bi bi-github m-3" style="font-size: 3rem"></i></a>
                </div>
                <p class="mt-3 text-center">Visit our facebook or twitter for the latest news. Don’t forget to check out our GitHub to see the code.</p>
            </div>
        </div>
</template>

<style lang="scss">
    //Mixins
    @import '../../assets/styles/mixins.scss';

    .rightSide{
        @include flexCenter();
        margin: auto;
    }

    .about{
        @include flexCenter();
        margin: auto;
        flex-direction: column;
        flex-wrap: nowrap;
        height: 50vh;
        width: 60vw;

        .bi{
            transition: color 0.2s ease-in;

            &:hover{
            color: rgb(246, 194, 92);
            }
        }

    }

    a{
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 993px) {
        .about{
            height: 70vh;
            width: 90vw;
        }
    }

    @media (max-width: 370px) {
        .about{
            height: 100vh;
            width: 90vw;
        }
    }

</style>
