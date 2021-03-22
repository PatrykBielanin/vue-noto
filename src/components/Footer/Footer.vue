<template functional>
        <div>
            <div class="d-none d-sm-none d-lg-block">
                <div class="footer">
                    <p>NOTO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2021</p>
                </div>
            </div>

            <div class="d-lg-none">
                <div class="col-12 footer-lg text-center mt-2">
                    <p>NOTO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2021</p>
                </div>
            </div>
        </div>
</template>

<style lang="scss">
    //Footer on dekstop
    .footer {
        position: fixed;
        top: 50%;
        right: -25px;
        transform: rotate(-90deg);

        p{
            font-size: 12px;
            margin-top: 40px;
            color: rgba(0, 0, 0, 0.5);
        }
    }

    //Footer on tablets/phones
    .footer-lg{
        position: sticky;
        height: 50px;
        bottom: calc( 100vh - 100px );
    }


</style>
