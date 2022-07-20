<template>
    <div>
        <div class="map-container">
            <ul>
                <li v-for="(loc, idx) in locations" :key="idx" @click="positionChange(loc.position, idx)" class="map-list" :class="{activeList:activeList==idx}">
                    <p class="title">{{loc.title}}</p>
                    <p class="content">{{loc.content}}</p></li>
            </ul>
            <div ref="map" class="map-board">
                <div class="custom-con">
                    <p @click="viewAll">전체보기</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            locations: [
                {title: "흑돼지식당", content: "- "+"맛있는 제주 흑돼지를 먹을 수 있는 숯불구이 전문점", position: "부산 부산진구 중앙대로 672"},
                {title: "멘도롱카페", content: "- "+"제주감귤을 직접 착즙해 만드는 감귤에이드가 맛있는 카페", position: "부산 부산진구 중앙대로680번가길 80-16"},
                {title: "제주호텔 임페리얼", content: "- "+"제주바다가 한눈에 보이는 오션뷰의 5성급 호텔", position: "부산 부산진구 동천로 47-1"},
            ],
            coords: [],
            map: null,
            activeList: null,
        }
    },
    methods: {
        // searchAddress() {
        //     new daum.Postcode({
        //         oncomplete: (data) => {
        //             this.locations.push(data.address);
        //             this.kakaoMapShow();
        //         }
        //     }).open();
        //     console.log(this.addList);
        // },

        viewAll() {

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

            // let positions = [
            //     {
            //         content: '<div class="marker-box">' + '<span class="text">여행지1</span>' + '</div>',
            //         latlng: new kakao.maps.LatLng(33.452278, 126.567803)
            //     },
            //     {
            //         content: '<div class="marker-box">여행지1<div>',
            //         latlng: new kakao.maps.LatLng(33.452671, 126.574792)
            //     },
            //     {
            //         content: '<div class="marker-box">여행지1<div>',
            //         latlng: new kakao.maps.LatLng(33.451744, 126.572441)
            //     }
            // ];
            // let bound = new kakao.maps.LatLngBounds();
            // for (let i = 0; i < positions.length; i++) {
            //     const marker = new kakao.maps.Marker({
            //         map: map,
            //         position: positions[i].latlng
            //     });
            //     let infowindow = new kakao.maps.InfoWindow({
            //         content:positions[i].content
            //     });
            //     kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
            //     kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

            //     bound.extend(positions[i].latlng);
            // };
            // function makeOverListener(map, marker, infowindow) {
            //     return function() {
            //         infowindow.open(map, marker);
            //     };
            // }
            // // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
            // function makeOutListener(infowindow) {
            //     return function() {
            //         infowindow.close();
            //     };
            // }
            // map.setBounds(bound);

            // let geocoder = new kakao.maps.services.Geocoder();
            // for (let i = 0; i < this.addList.length; i++) {
            //     geocoder.addressSearch(this.addList[i], (result, status) => {
            //         if (status === kakao.maps.services.Status.OK) {
            //             this.coords.push(new kakao.maps.LatLng(result[0].y, result[0].x));
            //             let marker = new kakao.maps.Marker({
            //                 map: map,
            //                 position: this.coords[0]
            //             })
            //         }
            //         console.log(this.coords);
            //     });
                
            // }

            let positions = []
            let geocoder = new kakao.maps.services.Geocoder();
            for (let i = 0; i < this.locations.length; i++) {
                geocoder.addressSearch(this.locations[i].position, (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        this.locations[i].position = new kakao.maps.LatLng(result[0].y, result[0].x)
                }});

                let pos = {
                    content: '<div class="customoverlay">' + '<a>' + '<span class="text">' + this.locations[i].title + '</span>' + '</a>' + '</div>',
                    latlng: this.locations[i].position
                }
                positions.push(pos);
            }
            console.log(positions);
            // let positions = [
            //     {
            //         content: '<div class="customoverlay">' + '<a>' + '<span class="text">' + this.locations.title + '</span>' + '</a>' + '</div>',
            //         latlng: new kakao.maps.LatLng(33.452278, 126.567803)
            //     },
            //     {
            //         content: '<div class="customoverlay">' + '<a>' + '<span class="text">' + this.locations.title + '</span>' + '</a>' + '</div>',
            //         latlng: new kakao.maps.LatLng(33.452671, 126.574792)
            //     },
            //     {
            //         content: '<div class="customoverlay">' + '<a>' + '<span class="text">' + this.locations.title + '</span>' + '</a>' + '</div>',
            //         latlng: new kakao.maps.LatLng(33.451744, 126.572441)
            //     }
            // ];
            let bound = new kakao.maps.LatLngBounds();
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
                bound.extend(positions[i].latlng);
            };
            map.setBounds(bound);
        },
        
    },
    mounted() {
        this.kakaoMapShow();

    },
}
</script>
<style>
    .map-list {
        width: 500px;
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
    }
    .map-board {
        width: 500px;
        height: 400px;
    }
    .custom-con {
        position: absolute;
        background: #fff;
        right: 40px;
        top: 5px;
        z-index: 100;
        border-radius: 10px;
        text-align: center;
        width: 80px;
        height: 35px;
        box-shadow: rgb(0 0 0 / 15%) 0px 2px 2px 0px;
        line-height: 35px;
        font-size: 14px;
        font-weight: 500;
    }
    .customoverlay {
        position:relative;
        bottom:65px;
        border-radius:6px;
        border: 1px solid #ccc;
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