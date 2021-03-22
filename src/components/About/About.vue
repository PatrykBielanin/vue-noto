<template>
        <div class="column col-12">
            <div class="about">
                <h2>Find us</h2>
                <div class="socialMedia mt-2">
                    <i class="bi bi-facebook m-3" style="font-size: 3rem"></i>
                    <i class="bi bi-twitter m-3" style="font-size: 3rem"></i>
                    <i class="bi bi-github m-3" style="font-size: 3rem"></i>
                </div>
                <p class="mt-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit officiis
                    nostrum laborum, velit nobis et dignissimos! Aspernatur ipsum labore odio assumenda,
                    consequatur illo ducimus sit laboriosam asperiores totam, nulla magnam.
                    Quidem perferendis est id at autem natus veniam! Delectus quidem officiis veniam impedit!
                    Nobis exercitationem deserunt atque, minima qui dolores quae obcaecati ipsam ab dicta ullam
                    labore quod commodi animi.</p>
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
        flex-direction: column;
        width: 50vw;
        height: 50vh;
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
