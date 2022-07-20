<template>
    <div style="position: relative; min-height: 100%">
        <Header />

        <section class="my-page">
            <Nuxt />
        </section>

        <Footer />
    </div>
</template>

<script>
export default {

};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap");

* {
    font-family: "Noto Sans KR", sans-serif;
}
.btn {
        border-radius: 3px !important;
}
.my-page {
    min-width: 700px;
    min-height: calc(100vh - 310px);
    /* height: 1330px; */
    margin: 0 auto;
    padding-bottom: 50px;
}
.form-control:focus {
    box-shadow: none;
    border-color: #a30000;
}
.form-control {
    font-size: 14px;
    font-weight: 300;
}
</style>
