<template>
    <div class="gallery p-0">
<!--        <div class="panel-main">-->
<!--            <div id="carouselExampleControls" class="carousel slide" data-interval="false" touch="true">-->
<!--                <div class="carousel-inner">-->
<!--                    <div class="carousel-item active">-->

<!--                    </div>-->
<!--                </div>-->
<!--                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">-->
<!--                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--                    <span class="visually-hidden">Previous</span>-->
<!--                </button>-->
<!--                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">-->
<!--                    <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--                    <span class="visually-hidden">Next</span>-->
<!--                </button>-->
<!--            </div>-->
<!--        </div>-->
        <div>
            <img src="https://dummyimage.com/500x400/dee2e6/6c757d.jpg" id="selected">
        </div>
        <div class="thumbs">
            <ul class="d-flex justify-content-center mt-2 p-0">
                <li class="p-1 li-img">
                    <img src="https://dummyimage.com/500x400/dee2e6/6c757d.jpg" alt="item-img-small"
                         class="img-fluid"
                         style="width: 50px; height: 50px"/>
                </li>
                <li class="p-1 li-img" @click="imgPic">
                    <img src="https://dummyimage.com/500x400/dee2e6/6c757d.jpg" alt="item-img-small"
                         style="width: 50px; height: 50px"/>
                </li>
                <li class="p-1 li-img" @click="imgPic">
                    <img src="https://dummyimage.com/500x400/dee2e6/6c757d.jpg" alt="item-img-small"
                         style="width: 50px; height: 50px"/>
                </li>
                <li class="p-1 li-img" @click="imgPic">
                    <img src="https://dummyimage.com/500x400/dee2e6/6c757d.jpg" alt="item-img-small"
                         style="width: 50px; height: 50px"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "ImgGalleryCom",
    mounted() {
        const current = document.querySelector("#selected");
        const thumbs = document.querySelectorAll(".thumbs img");
        const opacity = 0.5;
// Set opacity of first image
        thumbs[0].style.opacity = opacity;
        thumbs.forEach(img => img.addEventListener("click", imgActivate));

        function imgActivate(e) {
            // Reset opacity on all thumbs
            thumbs.forEach(img => (img.style.opacity = 1));
            // Change current image to source of clicked image
            current.src = e.target.src;
            // Add fadeIn class
            current.classList.add("fade-in");
            // Remove fadeIn class after animation time elapsed
            setTimeout(() => current.classList.remove("fade-in"), 500);
            // Change opacity to variable value
            e.target.style.opacity = opacity;
        }
    },
    methods: {
        changePic() {
            var pic = document.querySelector("#pic");
            // .small의 src
            var newPic = this.src;
            // cup의 src를 .small의 src로 세팅
            pic.src = newPic;
        },
        initPic() {
            var smallPics = document.querySelectorAll(".small");

            for (let i = 0; i < smallPics.length; i++) {
                smallPics[i].onclick = this.changePic();
            }

        }
    }
}
</script>

<style scoped>
.selected {
    width: 500px;
    height: 400px;
}
.panel-main img, .thumbs img {
    width: 100%;
    height: auto;
}

.thumbs {
    /*display: grid;*/
    /*grid-template-columns: repeat(5, 1fr);*/
    /*grid-gap: 5px;*/
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.fade-in {
    opacity: 0;
    animation: fadeIn 0.5s ease-in 1 forwards;
}

.li-img {
    list-style: none;
    float: left;
}

#selected {
    width: 100%;
}

.carousel-item {
    transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
    transition: transform 0.5s ease, -webkit-transform 0.5s ease;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}

</style>
