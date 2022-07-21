<template>
    <div>
        <div class="map-container">
            <ul class="item-loc">
                <li v-for="(loc, idx) in locations" :key="idx" @click="positionChange(loc.position, idx)" class="map-list" :class="{activeList:activeList==idx}">
                    <p class="title">{{loc.title}}</p>
                    <p class="content">{{loc.content}}</p></li>
            </ul>
            <div ref="map" class="map-board">
                <div class="custom-con">
                    <p @click="setBounds">전체보기</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "KaKaoMapApiCom",
    data() {
        return {
            locations: [
                {title: "흑돼지식당", content: "- "+"맛있는 제주 흑돼지를 먹을 수 있는 숯불구이 전문점", position: new kakao.maps.LatLng(33.452278, 126.567803)},
                {title: "멘도롱카페", content: "- "+"제주감귤을 직접 착즙해 만드는 감귤에이드가 맛있는 카페", position: new kakao.maps.LatLng(33.452671, 126.574792)},
                {title: "제주호텔 임페리얼", content: "- "+"제주바다가 한눈에 보이는 오션뷰의 5성급 호텔", position: new kakao.maps.LatLng(33.451744, 126.572441)},
            ],
            coords: [],
            map: null,
            activeList: null,
            bounds: null,
        }
    },
    methods: {
        setBounds() {
            for (let i = 0; i < this.locations.length; i++) {
                this.bounds.extend(this.locations[i].position);
                this.map.setBounds(this.bounds);
            }
        },
        positionChange(pos, idx) {
            let showLoc = pos;
            this.map.panTo(showLoc);
            this.activeList = idx;
            console.log(idx);
        },

        kakaoMapShow() {
            let container = this.$refs.map;
            let options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };
            let map = new kakao.maps.Map(container, options);
            this.map = map;
            let zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
            let positions = []
            let geocoder = new kakao.maps.services.Geocoder();
            let bounds = new kakao.maps.LatLngBounds();
            this.bounds = bounds;

            for (let i = 0; i < this.locations.length; i++) {
                let pos = {
                    content: '<div class="customoverlay">' + '<a>' + '<span class="text">' + this.locations[i].title + '</span>' + '</a>' + '</div>',
                    latlng: this.locations[i].position
                }
                positions.push(pos);
            }
            console.log("positions = {}", positions);

            for (let i = 0; i < positions.length; i++) {
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: positions[i].latlng
                });
                let customOverlay = new kakao.maps.CustomOverlay({
                    map: map,
                    position: positions[i].latlng,
                    content: positions[i].content,
                    // yAnchor: 1
                });
                this.bounds.extend(positions[i].latlng);
            };
            map.setBounds(this.bounds);
        },
        
    },
    mounted() {
        this.kakaoMapShow();
    },
}
</script>

<style>
/* html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
} */
.item-loc {
    padding: 0;
}
.map-list {
    width: 400px;
    height: 100px;
    list-style: none;
    padding: 10px 10px;
    margin: 10px;
    border: 1px solid lightgray;
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 2px 0px;
    border-radius: 10px;
    cursor: pointer;
}
.activeList {
    border: 2px solid #a30000;
}
.map-list .title{
    font-weight: 500;
    font-size: 16px;
    padding: 10px 0 5px 10px;
    margin: 0;
}
.map-list .content{
    font-weight: 300;
    font-size: 14px;
    padding: 5px 0 5px 10px;
    margin: 0;
}
.map-container {
    display: flex;
    justify-content: center;
}
.map-board {
    width: 600px;
    height: 350px;
}
.custom-con {
    position: absolute;
    background: #fff !important;
    right: 40px;
    top: 3px;
    z-index: 100;
    border-radius: 5px;
    text-align: center;
    width: 80px;
    height: 35px;
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 2px 0px;
    line-height: 35px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
}
.customoverlay {
    position:relative;
    bottom:65px;
    border-radius:6px;
    border: 1px solid #ccc !important;
    border-bottom:2px solid #ddd;
    float:left;
}
.customoverlay .text{
    font-family: "Noto Sans KR";
    display:block;
    text-align:center;
    background:#fff;
    margin-right:35px;
    padding:8px 15px;
    font-size:14px;
    font-weight:bold;
}
.customoverlay a {
    display:block;
    text-decoration:none;
    color:#000;
    text-align:center;
    border-radius:6px;
    font-size:14px;
    font-weight:bold;
    overflow:hidden;
    background: #a30000;
    background: #a30000
                url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) 
                no-repeat right 14px center;
    }
</style>
