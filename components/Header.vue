<template>
    <div class="top">
        <Logo class="logo"/>
        <div class="title">
            meleton-test
        </div>
    </div>
</template>
<style scoped>
    .top {
        height: 100px;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: lightcyan;
    }
    .logo {
        position: absolute; 
        top: 15px;
        left: 15px;
    }
    .title {
        position: absolute;
        bottom: 15px;
        left: 115px;
        font-family:
        'Quicksand',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
        display: block;
        font-weight: 230;
        font-size: 70px;
        color: #35495e;
        letter-spacing: 1px;
    }
</style>